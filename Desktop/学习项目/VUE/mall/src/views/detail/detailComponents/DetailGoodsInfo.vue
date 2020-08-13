<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="left"></div>
      <div class="text">{{detailInfo.desc}}</div>
      <div class="right"></div>
    </div>
    <div class="img">
      <div class="key">穿着效果</div>
      <img v-for="(item, index) in detailInfo.detailImage['0'].list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    watch: {
      detailInfo() {
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    },
    methods: {
      imgLoad() {
        if(++this.counter === this.imagesLength) {
          this.$emit('imageLoad')
        }
      }
    }
  }
</script>

<style scoped>
  .text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .goods-info {
    position: relative;
  }
  .left {
    position: absolute;
    top: -10px;
    left: 10px;
    width:10vh;
    border-bottom: 1px solid #000;
  }
  .right {
    position: absolute;
    bottom: 50px;
    right: 10px;
    width:10vh;
    border-bottom: 1px solid #000;
  }
  .key {
    text-align: center;
    margin-bottom: 10px;
  }
  .img {
    width: 100%;
  }
  .img img {
    width: 100%;
  }
</style>