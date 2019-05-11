const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],    //项目的起点入口
  output: {    //项目输出配置
    path: path.resolve(__dirname, 'build'),    //文件的输出目录 
    filename: 'static/js/[name].[hash:5].js'
  },
  module: {    //模块加载
    rules: [
      {
        test: /\.css$/,    //匹配规则
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,    //小于8192B的文件转为base64文件
            name: 'static/images/[name].[hash:5].[ext]'
          }
        }
      }
    ]
  },
  plugins: [    //插件配置
    new CleanWebpackPlugin(['build']),    //清空编译输出文件夹
    new HtmlWebpackPlugin({
      title: 'lanxiang\'s Demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'templates', 'index.html')
    }),    //生成Html5文件
  ],
  optimization: {
    splitChunks: {
      name: 'common'
    }
  }    //共用代码打包
};