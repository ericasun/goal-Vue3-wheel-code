<demo>
常规用法
</demo>

<template>
  <Popover content={content} title="Title" trigger="hover">
    <Button>Hover me</Button>
  </Popover>
  <Popover content={content} title="Title" trigger="focus">
    <Button>Focus me</Button>
  </Popover>
  <Popover content={content} title="Title" trigger="click">
    <Button>Click me</Button>
  </Popover>
</template>

<script lang="ts">
import {
  Popover
} from '../../lib/index'
import {
  ref
} from 'vue'
export default {
  components: {
    Popover,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
