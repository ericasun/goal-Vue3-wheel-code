<template>
<div class="topnav">
  <router-link to="/" class="logo">
    <img src="../assets/logo.png"  class="icon" />
  </router-link>
  <ul class="menu">
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
  <Icon name = "menu" v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu" />
</div>
</template>

<script lang="ts" setup>
import { inject, Ref } from 'vue'
import Icon from 'lib/Basic/Icon/Icon.vue'

const props = defineProps({
  toggleMenuButtonVisible: {
    type: Boolean,
    default: false
  }
})
const menuVisible = inject < Ref < boolean >> ('menuVisible') // get
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}

</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    >.menu {
      display: none;
    }
    >.logo {
      margin: 0 auto;
    }
    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>
