// vue.config.js

module.exports = {
  baseUrl: '/',
  chainWebpack: config => {
    function generateLoaders (loader) {
      config.module
        .rule(loader)
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .options({ remUnit: 75, remPrecision: 8 })
        .end()
      config.module
        .rule(loader)
        .oneOf('normal')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .options({ remUnit: 75, remPrecision: 8 })
        .end()
    }
    generateLoaders('css')
    generateLoaders('less')
  }
}