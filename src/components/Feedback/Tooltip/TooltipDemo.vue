<template>
    <h1>Tooltip 组件示例 </h1>
    <Demo :component="Tooltip1Demo" />
</template>

<script lang="ts">
import Tooltip1Demo from './Tooltip1.demo.vue'
import Demo from '../../Demo.vue'

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
