<template>
  <div class="item">
    <check-button :is-checked="product.checked" @click.native="checkClick"/>
    <div class="img">
      <img :src="product.imgURL" alt="">
    </div>
    <div class="content">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="bottom">
        <div class="left">¥{{product.newPrice}}</div>
        <div class="right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import CheckButton from "../../../components/content/checkBotton/CheckButton";
  export default {
    name: "CartListItem",
    components: {CheckButton},
    props: {
      product: {
        type: Object,
        default: {}
      }
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
        console.log(this.$store.state.cartList)
      }
    }
  }
</script>

<style scoped>
  .item {
    padding: 10px 10px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .3);
    display: flex;
  }
  .img {
    /*width: 100%;*/
  }
  .img img {
    width: 80px;
    border-radius: 5px;
  }
  .content {
    flex: 1;
    /*width: calc(100vw - 150px);*/
    margin-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
  }
  .title {
    padding-bottom: 15px;
    font-size: 18px;
  }
  .desc {
    font-size: 14px;
    color: #999999;
  }
  .bottom {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
  }
  .bottom .left {
    flex: 1;
    text-align: left;
    color: var(--color-tint);
  }
  .bottom .right {
    flex: 1;
    text-align: right;
  }
</style>