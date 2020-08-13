<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shop.logo" alt="">
      <div class="text">
        <span>{{shop.name}}</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <p>{{shop.sells}}</p>
        <span>总销量</span>
      </div>
      <div class="left">
        <p>{{shop.goodsCount}}</p>
        <span>全部宝贝</span>
      </div>
      <div class="right">
        <div v-for="(item, index) in shop.score" :key="index" class="score">
          <div class="score-item">{{item.name}}</div>
          <div class="score-item1" :class="{'better': item.isBetter}">{{item.score}}</div>
          <div class="score-item2" :class="{'better': item.isBetter}">{{item.isBetter ? '高' : '低'}}</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      进店逛逛
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default: {}
      },

    },
    computed: {

    }
  }
</script>

<style scoped>
  .shop-info {
  }
  .logo {
    padding: 10px 10px;
  }
  .logo img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .logo .text {
    display: inline-block;
    height: 40px;
    line-height: 40px;
  }
  .content {
    display: flex;
    text-align: center;
  }
  .content .left {
    height: 100px;
    flex: 1;
  }
  .content p {
    padding: 20px 10px 10px 10px;
  }
  .content span {
    font-size: 14px;
  }
  .content .right {
    height: 100px;
    flex: 2;
    color: #888888;
    padding-top: 10px;
  }
  .score {
    display: flex;
    font-size: 14px;
  }
  .score .score-item {
    flex: 2;
    padding-bottom: 10px;

  }
  .score .score-item1 {
    flex: 1;
    padding-bottom: 10px;
    color: yellowgreen;
  }
  .score .score-item2 {
    flex: 1;
    color: yellowgreen;
  }
   .score .better {
    color: var(--color-high-text);
  }
  .bottom {
    text-align: center;
    padding-bottom: 20px;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  }
</style>