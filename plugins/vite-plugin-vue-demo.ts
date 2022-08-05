// @ts-nocheck
/**
 *  自定义块demo
 */ 
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default demo = {
  name: 'demo',
  transform(code, id) {
    if (
      !/\/src\/components\/.*\.demo\.vue/.test(id) ||
      !/vue&type=demo/.test(id)
    ) {
      return;
    }

    let path = `.${id.match(/\/src\/components\/.*\.demo\.vue/)[0]}`;
    const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find(n => n.tag === 'demo')
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()

    return `export default Comp => {
      Comp.__sourceCode = ${JSON.stringify(main)}
      Comp.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }  
}


// export default demo = {
//   name: 'demo',
//   transform(code, id) {
//     // 获取文件后缀名
//     const fileArr = id.split('.') //根据.分割数组
//     const fileType = fileArr[fileArr.length -1]; //取最后一个

//     if( fileType === 'vue' && id.indexOf('demo') > 0){
//       const file = fs.readFileSync(id).toString()
//       const parsed = baseParse(file).children.find(n => n.tag === 'demo')
//       const title = parsed.children[0].content
//       const main = file.split(parsed.loc.source).join('').trim()

//       return `export default Comp => {
//         Comp.__sourceCode = ${JSON.stringify(main)}
//         Comp.__sourceCodeTitle = ${JSON.stringify(title)}
//       }`.trim()
//     }   
//     return
//   }
// }
