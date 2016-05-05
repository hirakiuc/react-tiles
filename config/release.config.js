var path = require('path')

module.exports = {
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  entry: {
    Board:       './src/Board.js',
    Widget:      ['./src/Widget.js'],
    TextWidget:  './src/widgets/TextWidget.js',
    ClockWidget: './src/widgets/ClockWidget.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "PureRenderMixin": "react/lib/ReactComponentWithPureRenderMixin",
    "react-grid-layout": "ReactGridLayout",
    "reactMixin": "react-mixin"
  },
  output: {
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'umd',
    publicPath: '/lib/',
    filename: '[name].js'
  },
  module: {
    loaders: require('./loaders.config')
  }
}
