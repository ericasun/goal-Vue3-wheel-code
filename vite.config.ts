// @ts-nocheck
import { md } from "./plugins/vite-plugin-vue-md";
import demo from "./plugins/vite-plugin-vue-demo";
import {defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  base: './',
  assetsDir: 'assets',
  plugins: [
    md(), 
    vue(),
    demo,
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/lib/Basic/Icon/svg')],
      // 执行icon name的格式
      symbolId: 'icon-[name]',
    })
  ]
});
