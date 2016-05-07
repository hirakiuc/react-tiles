import React from 'react'
import ReactGridLayout from 'react-grid-layout'

const WidthProvider = ReactGridLayout.WidthProvider

var StaticLayout = WidthProvider(ReactGridLayout)

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = { layout: [] }
    this.onLayoutChange = this.onLayoutChange.bind(this)
  }

  componentDidMount() {
    const e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
  }

  onLayoutChange(layout) {
    this.setState({layout: layout})
  }

  processWidget(widget) {
    const widget_name = widget.type.name.replace(/\.?([A-Z])/g, (x, y) => {
      return '-' + y.toLowerCase()
    }).replace(/^\-/, '')

    const properties = Object.assign({}, {
      key: widget.key,
      _grid: widget.props._grid,
      className: `widget ${widget_name}`
    })

    return (
      <div {...properties}>{widget}</div>
    )
  }

  render() {
    const properties = Object.assign({}, this.props, { className: 'layout' })

    return (
      <StaticLayout {...properties}>
        { React.Children.map(this.props.children, (child) => this.processWidget(child) )}
      </StaticLayout>
    )
  }
}

Board.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired,
  cols: React.PropTypes.number.isRequired,
  onLayoutChange: React.PropTypes.func,
  rowHeight: React.PropTypes.number.isRequired,
  width: React.PropTypes.number
}
