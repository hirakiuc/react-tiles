import React from 'react'
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin'
import ReactGridLayout from 'react-grid-layout'
import reactMixin from 'react-mixin'
import moment from 'moment'

import Widget from './Widget'

import TextWidget from './TextWidget'
import ClockWidget from './ClockWidget'

const WidthProvider = ReactGridLayout.WidthProvider

var StaticLayout = WidthProvider(ReactGridLayout)

class BoardLayout extends React.Component {
  constructor(props) {
    super(props)
    this.props = { layout: [] }
    this.onLayoutChange = this.onLayoutChange.bind(this)
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout)
  }

  render() {
    return (
      <StaticLayout className='layout' cols={this.props.cols} rowHeight={this.props.rowHeight} onLayoutChange={this.onLayoutChange}>
        { this.props.children }
      </StaticLayout>
    )
  }
}
reactMixin(BoardLayout.prototype, PureRenderMixin)

BoardLayout.propTypes = {
  onLayoutChange: React.PropTypes.func.isRequired,
  cols: React.PropTypes.number.isRequired,
  rowHeight: React.PropTypes.number.isRequired
}


export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = { layout: [] }
    this.onLayoutChange = this.onLayoutChange.bind(this)
  }

  componentDidMount() {
    let e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
  }

  onLayoutChange(layout) {
    this.setState({layout: layout})
  }

  processWidget(widget) {
    const widget_name = widget.type.name.replace(/\.?([A-Z])/g, (x, y) => {
      return "-" + y.toLowerCase()
    }).replace(/^\-/, "")

    return (
      <div key={widget.props.key} _grid={widget.props._grid} className={'widget ' + widget_name }>
        {widget}
      </div>
    )
  }

  render() {
    return (
      <StaticLayout className='layout' cols={this.props.cols} rowHeight={this.props.rowHeight} onLayoutChange={this.onLayoutChange}>
        { React.Children.map(this.props.children, (child) => this.processWidget(child) )}
      </StaticLayout>
    )
  }
}

Board.propTypes = {
  onLayoutChange: React.PropTypes.func,
  cols: React.PropTypes.number.isRequired,
  rowHeight: React.PropTypes.number.isRequired
}
