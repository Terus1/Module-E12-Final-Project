const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new ESLintWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/,
        use: [{
        loader: MiniCssExtractPlugin.loader,
          options: {
          esModule: true,
          }
        }, 'css-loader'] }
    ]
  }

}
