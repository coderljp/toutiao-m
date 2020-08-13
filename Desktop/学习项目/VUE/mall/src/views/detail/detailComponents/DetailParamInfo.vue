<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(item1, index) in paramInfo.sizes" :key="index" class="">
      <tr v-for="(item2, indey) in item1" :key="indey">
        <td v-for="(item3, indez) in item2" :key="indez">{{item3}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param {

  }
  .info-param .key {
    width: 100px;
  }

  .info-param .value {
    color: var(--color-tint);
  }

  .info-param table {
    width: 100%;
    border-collapse: collapse;
  }
  .info-param table tr {
    height: 50px;
  }

  .info-param table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
</style>