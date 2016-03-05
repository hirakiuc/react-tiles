import React from 'react'
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin'
import ReactGridLayout from 'react-grid-layout'
import reactMixin from 'react-mixin'
import moment from 'moment'

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
      <StaticLayout className='layout' cols={12} rowHeight={210} onLayoutChange={this.onLayoutChange}>
        <div key="1" _grid={{x: 0, y: 0, w: 6, h: 2, static: true}} className='widget text-widget'>
          <TextWidget
            title={'Text Widget'}
            body={'I am a TextWidget !'}
            moreinfo={'more info'}
            updated_at={moment().format('YYYY/MM/DD hh:mm:ss')}>
          </TextWidget>
        </div>
        <div key="2" _grid={{x: 6, y: 0, w: 3, h: 2, static: true}} className='widget number-widget'>
          <ClockWidget></ClockWidget>
        </div>
        <div key="6" _grid={{x: 9, y: 0, w: 3, h: 4, static: true}}>
          <TextWidget title={'6'} body={''}></TextWidget>
        </div>
        <div key="4" _grid={{x: 0, y: 2, w: 3, h: 2, static: true}}>
          <TextWidget title={'4'} body={''}></TextWidget>
        </div>
        <div key="5" _grid={{x: 3, y: 2, w: 6, h: 2, static: true}}>
          <TextWidget title={'5'} body={''}></TextWidget>
        </div>
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

