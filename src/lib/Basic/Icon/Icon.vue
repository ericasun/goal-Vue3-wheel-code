<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed} from 'vue'
export interface Props {
  name?: String;
  color?: String;
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: '',
})
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `gulu-icon ${props.name}`
  }
  return 'gulu-icon'
})

</script>

<style lang="scss" scoped>
.gulu-icon {
  width: 1.2em;
  height: 1.2em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
