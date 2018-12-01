const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common')


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    library: 'LibraryTemplate',
    libraryTarget: 'umd',
  },
  // externals: {
  //   React: 'react',
  // },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
      root: path.resolve(__dirname, '../'),
    }),
  ],
})
