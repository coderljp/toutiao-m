<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="left" @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="center">
          <div v-for="(item, index) in titles" :key="index" class="item" :class="{active: index === currentIndex}" @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/content/NavBar";
  export default {
    name: "detailNavBar",
    components: {NavBar},
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style scoped>
  .center {
    display: flex;
    font-size: 14px;
  }
  .left img {
    margin: 10px 0 0 10px;
  }
  .left {
    margin: 0 auto;
    vertical-align: center;
  }
  .item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
</style>