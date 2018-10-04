const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common')


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
  ],
})
