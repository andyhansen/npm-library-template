const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
	]
})
