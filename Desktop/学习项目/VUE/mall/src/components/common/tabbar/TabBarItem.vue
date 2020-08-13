<template>
  <div class="content" @click="changeEvent">
    <div v-if="isActive" class="img">
        <slot name="inactive"></slot>
    </div>

    <div v-else class="img">
        <slot name="active"></slot>
    </div>

    <div class="text" :style="colorChaneg">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    data() {
      return {
        active_color: '#ff5777'
      }
    },
    methods: {
      changeEvent: function () {
        // console.log(this.path)
        if (this.$route.path != this.path) {
          this.$router.push(this.path)
        }
      },
    },
    computed: {
      colorChaneg() {
          return !this.isActive ? {color: this.active_color} : {}
      },
      isActive() {
        return this.$route.path.indexOf(this.path)
      }
    }
  }
</script>

<style scoped>
  .content {
    margin: 0 auto;
  }
  .img {
    width: 29px;
    height: 29px;
    padding: 2px 0 5px 0;
  }
  .text {
    text-align: center;
    font-size: 14px;
  }
</style>