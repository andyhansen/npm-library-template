const merge = require("webpack-merge");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./",
    proxy: {
      "/telemetry/**": {
        target: "https://uat.flick.energy",
        changeOrigin: true,
        logLevel: "debug",
        prependPath: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../src/index.html")
    })
  ],
  entry: "./src/index.js"
});
