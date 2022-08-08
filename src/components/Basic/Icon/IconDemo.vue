<template>
  <div>
    <h1>Icon 图标</h1>
    <Demo :component="Icon1Demo" />
  </div>
  <div class="gulu-iconAttributes">
    <h1>Icon 属性</h1>
    <table>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>name</td>
        <td>名称</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>color</td>
        <td>svg 的 fill 颜色</td>
        <td>String</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from 'components/Demo.vue'
import Icon1Demo from './Icon1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Icon1Demo
    }
  }
}
</script>

<style lang="scss" scoped>
.gulu-iconAttributes{
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
