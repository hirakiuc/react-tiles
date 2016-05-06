var path = require('path')

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  entry: {
    Board:       ['./src/Board.js'],
    Widget:      ['./src/Widget.js'],
    TextWidget:  ['./src/widgets/TextWidget.js'],
    ClockWidget: ['./src/widgets/ClockWidget.js'],
    index:       './src/index.js'
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom",
    "react-grid-layout": "react-grid-layout"
  },
  output: {
    path: path.join(__dirname, '/lib/'),
    libraryTarget: 'umd',
    publicPath: '/lib/',
    filename: '[name].js'
  },
  module: {
    loaders: require('./loaders.config')
  }
}
