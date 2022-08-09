<demo>
常规用法
</demo>

<template>
  <table>
    <tr>
      <td>
        <Icon name = "alipay" />
        <span>alipay</span>
      </td>
      <td>
        <Icon name = "qq" />
        <span>qq</span>
      </td>
      <td>
        <Icon name = "wechat" />
        <span>wechat</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import {
  Icon
} from 'lib/index'

export default {
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
table{
  border-collapse: collapse;
  border-spacing: 0;
  td{
    width: 65px;
    border: 1px solid #dcdfe6;
    text-align: center;
    padding: 8px;
    span{
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      font-size: 12px;
    }
  }
}
</style>
