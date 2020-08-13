<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" ref="tabControl1" v-show="isStop"/>
    <scroll ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="scroll" @pullingUp="loadMore" class="content">
      <home-swiper :images="banners"@swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl"/>
      <goods-list :goods="goods[type].list" class="goods-list"/>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import HomeSwiper from "./homeComponent/HomeSwiper"
  import RecommendView from "./homeComponent/RecommendView";
  import FeatureView from "./homeComponent/FeatureView";
  import GoodsList from "../../components/content/goods/GoodsList";

  import NavBar from "../../components/content/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "../../network/home";
  import {debounce} from "../../common/utils";

  export default {
    name: "home",
    components: {
      BackTop,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll
    },
    data() {
      return {
        banners:[],
        recommends:[],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        type: 'pop',
        isShow: false,
        isStop: false,
        tabOffsetTop: 0
      }
    },
    methods: {
      /**
       * 网络请求
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        }).catch(err => {
          console.log(err)
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...(res.data.list))
          this.goods[type].page += 1
          // this.goods[type].list = this.goods[type].list.concat(res.data.list)
          this.$refs.scroll.finishPullUp()
        })
      },

      /**
       * 事件监听
       */
      tabClick(index) {
        if (index === 0) {
          this.type = 'pop'
        } else if (index === 1) {
          this.type = 'new'
        } else {
          this.type = 'sell'
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      scroll(position) {
        this.isShow = -position.y > 300 ? true : false
        this.isStop = -position.y > this.tabOffsetTop - 44 ? true : false
      },
      loadMore() {
        this.getHomeGoods(this.type)
        this.$refs.scroll.bScroll.refresh()
      },
      swiperImgLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    },
    created() {
      // 获取首页数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.$on('imageLoad', () => {
        refresh()
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .nav-bar {
    background: #ff5f8a;
    color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .goods-list {
    padding-top: 44px;
  }
  .tab-control {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content {
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
    /*z-index: 99;*/
  }
</style>