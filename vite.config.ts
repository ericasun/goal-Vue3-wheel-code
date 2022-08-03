// @ts-nocheck
import { md } from "./plugins/vite-plugin-vue-md";
import demo from "./plugins/vite-plugin-vue-demo";
import {defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/<goal-Vue3-wheel>/',
  assetsDir: 'assets',
  plugins: [
    md(), 
    vue(),
    demo
  ]
});
