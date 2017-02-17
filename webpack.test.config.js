const path = require('path');
const Webpack = require('webpack');

const package = require('./package.json');

module.exports = {
  entry: './test/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'index.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules')
    ],
  },
  devServer: {
    port: 9123
  }
};
