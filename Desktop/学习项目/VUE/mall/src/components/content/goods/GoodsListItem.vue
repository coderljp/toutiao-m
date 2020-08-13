<template>
  <div class="goods-list-item" @click="itemClick" v-if="Object.keys(goodsInfo).length !== 0">
    <img :src="goodsInfo.show.img" alt="" @load="imageLoad">
    <div class="text">
      <p>{{goodsInfo.title}}</p>
      <span class="price">¥{{goodsInfo.price}}</span>
      <span class="collect">{{goodsInfo.cfav}}</span>
    </div>
  </div>
  <div class="goods-list-item" @click="" v-else-if="Object.keys(goods).length !== 0">
    <img :src="goods.image" alt="" @load="imageLoad">
    <div class="text">
      <p>{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
      },
      itemClick() {
        this.$router.push(`/detail/${this.goodsInfo.iid}`)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    width: 47%;
    padding-bottom: 45px;
    position: relative;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  .text {
    font-size: 14px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 5px;
  }
  .price {
    color: var(--color-high-text);
    display: inline-block;
    padding: 0 20px 0 20%;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>