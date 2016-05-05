import Board from './Board.js'
import Widget from './Widget.js'

import '../stylus/style.styl'
import '../stylus/widget.styl'

import TextWidget from './widgets/TextWidget.js'
import ClockWidget from './widgets/ClockWidget.js'

module.exports = {
  Board: Board,
  Widget: Widget,

  TextWidget: TextWidget,
  ClockWidget: ClockWidget
}
