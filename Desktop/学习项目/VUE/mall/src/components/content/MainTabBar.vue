<template>
  <tab-bar>
    <tab-bar-item v-for="(item, index) in itemInfo" :key="index" :path="item.path">
        <template v-slot:inactive>
          <img :src="item.src" alt="" class="img">
        </template>
        <template v-slot:active>
          <img :src="item.active_src" alt="" class="img">
        </template>
        <template v-slot:content>
          {{item.meessage}}
        </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    },
    data() {
      return {
        itemInfo: [
          {
            src: require('../../assets/img/tabbar/home.svg'),
            active_src: require('../../assets/img/tabbar/home_active.svg'),
            meessage: '首页',
            path: '/home'
          },
          {
            src: require('../../assets/img/tabbar/category.svg'),
            active_src: require('../../assets/img/tabbar/cart_active.svg'),
            meessage: '分类',
            path: '/category'},
          {
            src: require('../../assets/img/tabbar/cart.svg'),
            active_src: require('../../assets/img/tabbar/cart_active.svg'),
            meessage: '购物车',
            path: '/cart'},
          {
            src: require('../../assets/img/tabbar/profile.svg'),
            active_src: require('../../assets/img/tabbar/profile_active.svg'),
            meessage: '我的',
            path: '/profile'}
        ]
      }
    }
  }
</script>

<style scoped>
  .img {
    width: 29px;
    height: 29px;
  }
</style>