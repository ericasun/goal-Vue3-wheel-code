<template>
  <div>
    <h1>Tabs 标签页</h1>
    <Demo :component="Tabs1Demo" />
  </div>
  <div class="gulu-tabsAttributes">
    <h1>Tabs 属性</h1>
    <table>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>title</td>
        <td>选项名称</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>context</td>
        <td>内容</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from '../../Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
    }
  }
}
</script>

<style lang="scss" scoped>
.gulu-tabsAttributes{
  padding-bottom: 150px;
  table{
    width: 100%;
    text-align: left;
    padding: 5px 10px;
    border-collapse: collapse;
    border-spacing: 0;
    td, th{
      border-bottom: 1px solid #dcdfe6;
      padding: 8px 10px;
    }
  }
}
</style>
