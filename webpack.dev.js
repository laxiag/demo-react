const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',    //代码关联显示方式
  devServer: {
    historyApiFallback: true,    //文件重定向，和react-router相关
    hot: true,    //开启模块热替换
    port: 8083,    //服务器端口
    host: "127.0.0.1",    //服务器域名
    open: true    //自动打开浏览器标签
  },
  plugins: [
    new webpack.NamedModulesPlugin(),    //显示模块的相对路径
    new webpack.HotModuleReplacementPlugin()    //加载热替换插件
  ]
});