<demo>
一键打开 Dialog
</demo>

<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button, openDialog } from 'lib/index'
import { h } from 'vue'

const showDialog = () => {
  openDialog({
    title: h('strong', {}, '标题'),
    content: '你好',
    ok () {
      console.log('ok')
    },
    cancel () {
      console.log('cancel')
    }
  })
}
</script>
