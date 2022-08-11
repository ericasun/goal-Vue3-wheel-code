<template>
<div class="layout">
  <Topnav toggleMenuButtonVisible class="nav" />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <h3>Basic 基础组件</h3>
      <ol>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/doc/icon">Icon 图标</router-link>
        </li>
        <!-- <li>
          <router-link to="/doc/layout">Layout 布局</router-link>
        </li> -->
      </ol>
      <h3>Form 表单组件</h3>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <!-- <li>
          <router-link to="/doc/datepicker">Date Picker 日期选择器</router-link>
        </li> -->
      </ol>
      <h3>Data 数据展示</h3>
      <h3>Navigation 导航</h3>
      <ol>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
      </ol>
      <h3>Feedback 反馈组件</h3>
      <ol>
        <li>
          <router-link to="/doc/dialog">Dialog 对话框</router-link>
        </li>
        <!-- <li>
          <router-link to="/doc/tooltip">Tooltip 文字提示</router-link>
        </li> -->
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts" setup>
import Topnav from 'components/Topnav.vue'
import {
  inject,
  Ref
} from 'vue'
const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
</script>

<style lang="scss" scoped>
$aside-index : 10;
$aside-width : 210px;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav {
    flex-shrink: 0;
  }
  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: $aside-width;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  >aside {
    flex-shrink: 0;
  }
  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: white;
  width: $aside-width;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  >h2, h3 {
    margin-bottom: 4px;
    padding: 0 8px;
  }
  >ol {
    >li {
      text-align: left;
      >a {
        display: block;
        padding: 4px 18px;
        text-decoration: none;
      }
      .router-link-active {
        color: #409eff;
        background: #409eff1a;
        border-radius: 8px;;
      }
      :hover{
        color: #409eff;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
