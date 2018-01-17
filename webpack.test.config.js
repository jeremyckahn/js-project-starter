const commonConfig = require('./webpack.common.config');
const path = require('path');
const Webpack = require('webpack');

module.exports = Object.assign(commonConfig, {
  entry: './test/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'index.js'
  },
  devServer: {
    port: 9123
  }
});
