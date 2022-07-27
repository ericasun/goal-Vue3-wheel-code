// @ts-nocheck
/**
 *  自定义块demo
 */ 
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default demo = {
  name: 'demo',
  transform(code, path) {
    // 获取文件后缀名
    const fileArr = path.split('.') //根据.分割数组
    const fileType = fileArr[fileArr.length -1]; //取最后一个

    if( fileType === 'vue' && path.indexOf('demo') > 0){
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }   
    return
  }
}
