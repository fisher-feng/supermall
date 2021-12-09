module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, //视窗的宽度，对应的就是我们设计稿的宽度
      viewportHeight: 667, //视窗的高度，对应的就是我们设计稿的高度
      unitportHeight: 5, //指定px转换为的视窗单位，建议用vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item', 'nav-bar', 'content', 'Join-cart'], //指定不需要转换的类
      minPiexelValue: 1, //小于或等于1px不转换为视窗单位
      mediaQuery: false, //允许在媒体中转换为px
      exclude: [/^TarBar/] //排除某个文件
    }
  }
}