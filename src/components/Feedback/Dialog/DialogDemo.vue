<template>
  <div>
    <h1>Dialog 对话框</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
  <div class="gulu-dialogAttributes">
    <h1>Dialog 属性</h1>
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
        <td>标题</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>content</td>
        <td>内容</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>closeOnClickOverlay</td>
        <td>点击遮罩层不关闭界面</td>
        <td>Boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
    </table>
  </div>
  <div class="gulu-dialogAttributes">
    <h1>Dialog 事件</h1>
    <table>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>ok</td>
        <td>Dialog关闭的回调</td>
        <td>—</td>
      </tr>
      <tr>
        <td>cancel</td>
        <td>Dialog关闭的回调</td>
        <td>—</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import Demo from 'components/Demo.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
</script>

<style lang="scss" scoped>
.gulu-dialogAttributes, .gulu-dialogAttributes{
  padding-bottom: 50px;
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
