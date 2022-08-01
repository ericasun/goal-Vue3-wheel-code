<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <svg @click="hideCode" v-if="codeVisible">
        <use xlink:href = "#icon-menu"></use>
      </svg>
      <svg @click="showCode" v-else>
        <use xlink:href="#icon-menu"></use>
      </svg>
       <svg @click="copyCode">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
    <div class="demo-code" v-if="codeVisible" id ="demo-code">
      <pre class="language-html" v-html="html" />
    </div>
    <div @click="hideCode" v-if="codeVisible" class="demo-actions-2">隐藏源代码</div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import {
  computed,
  ref,
  defineComponent
} from 'vue';
const Prism = (window as any).Prism
export default defineComponent({
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
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
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
      copyCode
    }
  }
})
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
    svg {
      grid-area: icon;
      width: 32px;
      height: 32px;
    }
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
}
</style>
