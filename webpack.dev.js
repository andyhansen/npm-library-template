const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
	  contentBase: './'
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, 'dev/index.html'),
		}),
	],
	entry: './dev/index.js',
})
