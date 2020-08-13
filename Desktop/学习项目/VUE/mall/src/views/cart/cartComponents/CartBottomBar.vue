<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-botton" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="num">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkBotton/CheckButton";
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '¥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.newPrice * item.count
        }, 0)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) {
          return false
        } else {
          return !this.$store.state.cartList.find(item => !item.checked)
        }
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {  // 全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    left: 0;
    right: 0;
    height: 44px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    display: flex;
  }
  .check-content {
    display: flex;
    line-height: 44px;
    margin-left: 20px;
  }
  .check-botton {
    position: relative;

  }
  .price {
    flex: 1;
    color: #ff5777;
    margin-left: 20px;
    line-height: 44px;
  }
  .num {
    background-color: #ff5f8a;
    text-align: center;
    font-size: 14px;
    width: 80px;
    line-height: 44px;
  }
</style>