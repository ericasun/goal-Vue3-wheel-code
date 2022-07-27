// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}

export function md() {
  return {
    name: 'md', 
    configureServer(){ // 用于开发
      async ({ app }) => {
        app.use(async (ctx, next) => { // koa
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js'
            const filePath = path.join(process.cwd(), ctx.path)
            ctx.body = mdToJs(fs.readFileSync(filePath).toString())
          } else {
            await next()
          }
        })
      }
    },
    transform(code, path){ // 用于 rollup // 插件
      // 获取文件后缀名
      const fileArr = path.split('.') //根据.分割数组
      const fileType = fileArr[fileArr.length -1]; //取最后一个

      if(/\md$/.test(fileType)){
         return mdToJs(code)
      }
      return
    }
  }
}