<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="nav"/>
    <scroll class="scroll" ref="goodsInfoScroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top class="back-top" @click.native="backClick" v-show="isShow"/>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
  import DetailNavBar from "./detailComponents/detailNavBar";
  import detailSwiper from "./detailComponents/detailSwiper";
  import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
  import DetailShopInfo from "./detailComponents/DetailShopInfo";
  import DetailGoodsInfo from "./detailComponents/DetailGoodsInfo";
  import DetailParamInfo from "./detailComponents/DetailParamInfo";
  import DetailCommentInfo from "./detailComponents/DetailCommentInfo";
  import DetailRecommendInfo from "./detailComponents/DetailRecommendInfo";
  import DetailBottomBar from "./detailComponents/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";

  import {getDetail, GoodInfo, Shop, GoodsParam, getRecommend } from "../../network/detail";
  import {debounce} from "../../common/utils";
  import BackTop from "../../components/content/backTop/BackTop";

  import Toast from "../../components/common/toast/Toast";

  export default {
    name: "Detail",
    components: {
      DetailGoodsInfo,
      DetailNavBar,
      detailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      BackTop,
      Toast
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTopYs: [],
        currentIndex: 0,
        isShow: false,
        isStop: false,
        message: '',
        show: false
      }
    },
    methods: {
      imageLoad() {
        this.$refs.goodsInfoScroll.bScroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(-this.$refs.params.$el.offsetTop + 44)
        this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
      },
      _getRecommend() {
        getRecommend().then((res, error) => {
          if (error) return
          this.recommendList = res.data.list
        })
      },
      titleClick(index) {
        console.log(index)
        this.$refs.goodsInfoScroll.scrollTo(0, this.themeTopYs[index], 100)

      },
      contentScroll(position) {
        let positionY = position.y

        this.isShow = -position.y > 300 ? true : false
        this.isStop = -position.y > this.tabOffsetTop - 44 ? true : false

        let length = this.themeTopYs.length
        for(let i = 0; i < length; i++) {
          if ((this.currentIndex !== i && positionY < this.themeTopYs[i] && positionY >= this.themeTopYs[i+1]) || (this.currentIndex !== i && i === length -1 && positionY < this.themeTopYs[i])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      backClick() {
        this.$refs.goodsInfoScroll.scrollTo(0, 0, 500)
      },
      addToCart() {
        // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.realPrice;
        // 3.添加到Store中
        this.$store.dispatch('addCart', obj).then(res => {
          this.$toast.show(res)
        })
      }
    },
    created() {
      this.iid = this.$route.params.iid

      this._getRecommend()

      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result
        this.topImages = res.result.itemInfo.topImages

        this.goods = new GoodInfo(data.itemInfo, data.columns, data.shopInfo.services)

        this.detailInfo = data.detailInfo

        this.shop = new Shop(data.shopInfo)

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }

        this.$nextTick(() => {
        })
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
    },
    updated() {
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .nav-bar {
    position: relative;
    z-index: 99;
    background-color: #fff;
  }
  .scroll {
    height: calc(100vh - 93px);
  }

  .back-top {
    position: fixed;
    right: 15px;
    bottom: 60px;
  }
  .stop {
    position: fixed;
    left: 0;
    right: 0;
    top: 88px;
  }
</style>