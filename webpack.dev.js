const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    hot: true,
    devMiddleware: {
      stats: false,
    },
  },
})

