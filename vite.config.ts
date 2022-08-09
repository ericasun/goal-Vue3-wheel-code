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
  ],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, 'src'),
      "components": path.resolve(__dirname, "src/components"),
      "lib": path.resolve(__dirname, "src/lib")
    }
  },
  // build: {
  //   // Template for index.html
  //   index: path.resolve(__dirname, "./dist/index.html"),
  //   // Paths
  //   assetsRoot: path.resolve(__dirname, "./dist"),
  //   assetsSubDirectory: "static",
  //   assetsPublicPath: "./", //此处为修改的地方，这里加.
  // },
});
