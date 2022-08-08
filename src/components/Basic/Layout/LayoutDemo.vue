<template>
  <h1>Layout 布局</h1>
  <Demo :component="Layout1Demo" />
  未完待续。。。
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
import Layout1Demo from './Layout1.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Layout1Demo,
    }
  }
}
</script>
