const merge = require("webpack-merge");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    library: "LibraryTemplate",
    libraryTarget: "umd"
  },
  // externals: {
  //   React: 'react',
  // },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, "../dist")], {
      root: path.resolve(__dirname, "../")
    })
  ]
});
