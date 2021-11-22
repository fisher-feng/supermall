// 配置
module.exports = {
  configureWebpack:{
    resolve:{
      // extensions:[],
      // 取别名
      alias:{
        '@':'src',
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'router':'@/router',
        'store':'@/store',
        'views':'@/views'
      }
    }
  }
}
