<template>
  <div>
    <div>
      <h1>Button 按钮</h1>
      <Demo :component="Button1Demo" />
      <Demo :component="Button2Demo" />
      <Demo :component="Button3Demo" />
      <Demo :component="Button4Demo" />
      <Demo :component="Button5Demo" />
    </div>
    <div class="gulu-buttonAttributes">
      <h1>Button 属性</h1>
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>theme</td>
          <td>类型</td>
          <td>string</td>
          <td>button / text / link</td>
          <td>button</td>
        </tr>
        <tr>
          <td>size</td>
          <td>尺寸</td>
          <td>string</td>
          <td>normal /big / small </td>
          <td>normal</td>
        </tr>
        <tr>
          <td>level</td>
          <td>类型</td>
          <td>string</td>
          <td>normal /main / danger</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>按钮是否为禁用状态</td>
          <td>boolean	</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否为加载中状态</td>
          <td>boolean	</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "components/Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  },
};
</script>

<style lang="scss">
.gulu-buttonAttributes{
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
