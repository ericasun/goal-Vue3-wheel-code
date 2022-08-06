<template>
  <div>
    <div>
      <h1>Switch 组件示例 </h1>
      <Demo :component="Switch1Demo" />
      <Demo :component="Switch2Demo" />
    </div>
    <div class="gulu-switchAttributes">
      <h1>Switch 属性</h1>
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>value</td>
          <td>值</td>
          <td>Boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Switch1Demo from '../Switch/Switch1.demo.vue'
import Switch2Demo from '../Switch/Switch2.demo.vue'
import Demo from '../../Demo.vue'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
    }
  }
}
</script>

<style lang="scss" scoped>
.gulu-switchAttributes{
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
