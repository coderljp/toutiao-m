<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
    },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      /**
       * toast 组件的 show 方法 用来展示提示消息
       * @param message  展示的消息
       * @param duration  展示的时间
       */
      show(message="默认值", duration=1000) {
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 40px 10px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(100, 100, 100, .5);
    z-index: 99;
  }
</style>