<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="item" :class="{active: index === currentIndex}" @click="itemChange(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemChange: function (index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background-color: #ffffff;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 5px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>