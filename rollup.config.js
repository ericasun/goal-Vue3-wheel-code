// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'STUI',
    file: 'dist/lib/stui.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'STUI',
    file: 'dist/lib/stui.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/
    }),
    alias({
      entries: [
        {
          find: '@', // 别名名称，作为依赖项目需要使用项目名
          replacement: path.resolve(__dirname, 'src'),
          customResolver: resolve({
            extensions: ['.js', '.jsx', '.vue', '.sass', '.scss']
          })
        }
      ]
    })
  ]
}
