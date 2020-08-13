<template>
  <div class="check-botton">
    <img src="../../../assets/img/cart/tick.svg" alt="" :class="{check: isChecked}">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-botton {
    display: flex;
    align-items: center;
    padding-right: 5px;
  }
  .check-botton img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  .check {
    background-color: #ff5777;
  }
</style>