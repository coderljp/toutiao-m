<template>
  <van-swipe :autoplay="2000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <a :href="image.link"><img v-lazy="image.image" @load="swiperImgLoad" /></a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      swiperImgLoad() {
        if (!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .van-swipe {
    /*height: 22vh;*/
    height: 150px;
  }
  .van-swipe img {
    width: 100%;
  }
</style>