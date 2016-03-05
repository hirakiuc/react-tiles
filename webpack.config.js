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
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus?minimize',
        exclude: /node_modules/
      }
    ]
  }
}
