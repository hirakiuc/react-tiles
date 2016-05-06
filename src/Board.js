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
    let e = document.createEvent('Event')
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
