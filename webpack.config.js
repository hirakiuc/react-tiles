module.exports = {
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
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
      }
    ]
  }
}
