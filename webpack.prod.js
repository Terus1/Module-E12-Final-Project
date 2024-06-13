const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devServer: {
    hot: false,
    devMiddleware: {
      stats: false,
    },
  },
})

