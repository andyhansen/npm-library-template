const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin') // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../dev')],
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
      },
      {
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../dev')],
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-syntax-dynamic-import'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
}
