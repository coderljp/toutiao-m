<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <img src="../../assets/img/common/back.svg" alt="">
      </template>
      <template v-slot:center>购物车({{length}})</template>
    </nav-bar>

    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>

  import NavBar from "../../components/content/NavBar";
  import CartList from "./cartComponents/CartList";
  import CartBottomBar from "./cartComponents/CartBottomBar";

  import {mapGetters} from 'vuex'
  export default {
    name: "cart",
    components: {CartBottomBar, CartList, NavBar},
    computed: {
      ...mapGetters({
        length: 'cartLength'
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
  .nav-bar img {
    position: relative;
    left: 20px;
    top:5px;
  }
</style>