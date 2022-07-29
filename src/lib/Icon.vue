<template>
  <div>
    <svg>
      <use :xlink:href = "iconName" />
    </svg>
  </div>
  <!-- <img :src="srcUrl" /> -->
</template>

<script lang="ts">
// 引入本地的svg文件
// 定义一个加载目录的函数
// const requireAll = requireContext => requireContext.keys().map(requireContext)
//这个 require.context('我们的路径', 是否格式固定是true, 正则表达式)
// const req = import.meta.globEager("./icons/*.svg") 
// require.context('./icons', false, /\.svg$/) 

// 加载目录下的所有的 svg 文件
// requireAll(req)

const modules = import.meta.glob('./icons/*.svg')

export default {
  props: {
    name:{
      type:String,
    },
  },
  // setup(){
  //   return {
  //     alipay,
  //     qq,
  //     wechat,
  //     // srcUrl
  //   }
  // },
  computed: {
    iconName(){
      return `#icon-${this.name}`
    }
  }
}
</script>

<style lang="scss">
  // svg{
  //   width: 1.4em;
  //   height: 1.4em;
  //   display: inline-block;
  //   border:1px solid red;
  // }
</style>
