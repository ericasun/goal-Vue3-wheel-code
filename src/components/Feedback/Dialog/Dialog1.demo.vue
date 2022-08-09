<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import {
  Button,
  Dialog
} from "lib/index"
import {
  ref
} from 'vue'

export default {
  components: {
    Dialog,
    Button
  }
}
export const x = ref(false);
export const toggle = () => {x.value = !x.value}
export const f1 = () => {return false}
export const f2 = () => {}
</script>
