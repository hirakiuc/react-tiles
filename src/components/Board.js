import React from 'react'
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin'
import ReactGridLayout from 'react-grid-layout'
import reactMixin from 'react-mixin'

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
      <StaticLayout className='layout' cols={12} rowHeight={150} onLayoutChange={this.onLayoutChange}>
        <div key="1" _grid={{x: 0, y: 0, w: 4, h: 2, static: true}}>1</div>
        <div key="2" _grid={{x: 4, y: 0, w: 4, h: 2, static: true}}>2</div>
        <div key="3" _grid={{x: 8, y: 0, w: 4, h: 2, static: true}}>3</div>
        <div key="4" _grid={{x: 0, y: 2, w: 4, h: 2, static: true}}>4</div>
        <div key="5" _grid={{x: 4, y: 2, w: 4, h: 2, static: true}}>5</div>
        <div key="6" _grid={{x: 8, y: 2, w: 4, h: 2, static: true}}>6</div>
      </StaticLayout>
    )
  }
}
reactMixin(BoardLayout.prototype, PureRenderMixin)

BoardLayout.propTypes = {
  onLayoutChange: React.PropTypes.func.isRequired
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

  render() {
    return (
      <BoardLayout onLayoutChange={this.onLayoutChange} />
    )
  }
}

