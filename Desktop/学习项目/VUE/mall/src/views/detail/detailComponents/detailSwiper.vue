<template>
  <van-swipe :autoplay="2000">
    <van-swipe-item v-for="(image, index) in topImages" :key="index">
      <img v-lazy="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "detailSwiper",
    props: {
      topImages: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .van-swipe {
    /*height: 22vh;*/
    height: 250px;
  }
  .van-swipe img {
    width: 100%;
  }
</style>