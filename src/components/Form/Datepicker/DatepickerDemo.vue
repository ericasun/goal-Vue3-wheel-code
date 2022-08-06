<template>
    <h1>Datepicker</h1>
    <Demo :component="Datepicker1Demo" />
</template>

<script lang="ts">
import Demo from '../../Demo.vue';
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
