<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsInfo="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex: auto;
    justify-content: space-around;
  }
</style>