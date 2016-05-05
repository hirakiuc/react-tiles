var path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, 'dst'),
    publicPath: '/dst/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  debug: true,
  module: {
    loaders: require('./loaders.config')
  }
}
