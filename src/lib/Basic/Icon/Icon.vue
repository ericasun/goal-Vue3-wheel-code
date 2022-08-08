<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script>
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    return {
      iconName: computed(() => `#icon-${props.name}`),
      svgClass: computed(() => {
        if (props.name) {
          return `gulu-icon ${props.name}`
        }
        return 'gulu-icon'
      })
    }
  }
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
