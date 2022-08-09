<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Icon name = "copy" @click="copyCode"/>
      <Icon name = "code" @click="hideCode" v-if="codeVisible"/>
      <Icon name = "code" @click="showCode" v-else/>
    </div>
    <div class="demo-code" v-if="codeVisible" id ="demo-code">
      <pre class="language-html" v-html="html" />
    </div>
    <div @click="hideCode" v-if="codeVisible" class="demo-actions-2">
      <Icon name = "upTriangle" />
       <span>隐藏源代码</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from 'lib/Basic/Button.vue'
import Icon from "lib/Basic/Icon/Icon.vue";
import 'prismjs';
import 'prismjs/themes/prism.css'
import { computed, ref} from 'vue';

const Prism = (window as any).Prism
// @ts-ignore
const props = defineProps({
  component: Object
})
const html = computed(() => {
  return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
})
const showCode = () => codeVisible.value = true
const hideCode = () => codeVisible.value = false
const codeVisible = ref(false)
// 设置剪贴板内容
const copyCode = () => {
  navigator.clipboard.writeText(props.component.__sourceCode).then(
      function() {
      alert('代码复制成功')
    }
  );
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    text-align: right;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
  &-actions-2{
    text-align: center;
    color: #909399;
  }
  svg {
    grid-area: icon;
    width: 14px;
    height: 14px;
    margin-left:8px;
  }
}
</style>
