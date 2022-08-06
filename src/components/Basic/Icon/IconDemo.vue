<template>
  <h1>Icon 图标</h1>
  <Demo :component="Icon1Demo" />
</template>

<script lang="ts">
import Demo from '../../Demo.vue'
import Icon1Demo from '../Icon/Icon1.demo.vue'
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
