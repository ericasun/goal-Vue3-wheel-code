<demo>
支持 disabled
</demo>

<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts" setup>
import {Switch} from 'lib/index'
import {ref} from 'vue'
const bool = ref(false)
</script>
