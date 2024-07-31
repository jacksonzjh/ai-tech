const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ai-tech/'
    : '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "JH's AI Tech";
      return args;
    });
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
});
