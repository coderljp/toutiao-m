<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title"><p>{{goods.title}}</p></div>
    <div class="price">
      <p>¥{{goods.realPrice}}</p>
      <p class="old">{{goods.oldPrice}}</p>
      <span>{{goods.discount}}</span>
    </div>
    <div class="services">
      <p>{{goods.columns[0]}}</p>
      <p>{{goods.columns[1]}}</p>
      <p>{{goods.services[3].name}}</p>
    </div>
    <div class="service">
      <div v-for="item in 3" :key="item" class="service-item">
        <img :src="goods.services[item - 1].icon" alt="">
        <span>{{goods.services[item - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    data() {
      return {
      }
    },
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .title {
    padding-top: 10px;
  }
  .title p {
    text-indent: 1rem;
    font-size: 18px;
    font-weight: 400;
  }
  .price {
    padding-top: 10px;
    position: relative;
    padding-bottom: 4px;
    /*box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);*/
  }
  .price p {
    font-size: 24px;
    color: var(--color-high-text);
    margin-left: 10px;
    display: inline-block;
  }
  .price .old {
    font-size: 14px;
    color: #999999;
    text-decoration-line: line-through;
  }
  .price span {
    font-size: 14px;
    color: white;
    display: inline-block;
    position: absolute;
    left: 55%;
    background-color: var(--color-tint);
    border-radius: 5px;
  }
  .services {
    box-sizing: border-box;
    display: flex;
    text-align: center;
    margin-top: 20px;
  }
  .services p {
    display: inline-block;
    flex: 1;
    font-size: 14px;
    color: #888888;
  }
  .service {
    display: flex;
    font-size: 14px;
    padding-top: 30px;
    justify-content: space-around;
    padding-bottom: 15px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .service .item {
    flex: 1;
  }
  .service img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
</style>