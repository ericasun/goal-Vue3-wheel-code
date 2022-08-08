<template>
    <h1>Tooltip 文字提示</h1>
    <Demo :component="Tooltip1Demo" />
    未完待续。。。
</template>

<script lang="ts">
import Tooltip1Demo from './Tooltip1.demo.vue'
import Demo from 'components/Demo.vue'

export default {
components: {
    Demo
  },
  setup() {
    return {
      Tooltip1Demo,
    }
  }
}
</script>
