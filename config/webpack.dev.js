const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
  entry: './src/index.js',
})
