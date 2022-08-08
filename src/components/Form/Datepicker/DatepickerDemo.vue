<template>
    <h1>Date Picker 日期选择器</h1>
    <Demo :component="Datepicker1Demo" />
    未完待续。。。
</template>

<script lang="ts">
import Demo from 'components/Demo.vue';
import Datepicker1Demo from './Datepicker1.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Datepicker1Demo,
    }
  }
}
</script>
