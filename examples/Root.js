import React from 'react'
import ReactDOM from 'react-dom'

import { Board, TextWidget, ClockWidget } from '../src/index.js'

document.addEventListener('DOMContentLoaded', (_event) => {
  ReactDOM.render(
    (
      <Board layoutType={'static'} cols={12} rowHeight={210}>
        <TextWidget key="1"  _grid={{x: 0, y: 0, w: 6, h: 2, static: true}} className='widget text-widget'
          title={'Text Widget'} body={'I am a TextWidget !'} moreinfo={'more info'}>
        </TextWidget>
        <ClockWidget key="2" _grid={{x: 6, y: 0, w: 3, h: 2, static: true}}>1</ClockWidget>
        <TextWidget key="3" _grid={{x: 9, y: 0, w: 3, h: 4, static: true}} title={'6'} body={''}></TextWidget>
        <TextWidget key="4" _grid={{x: 0, y: 2, w: 3, h: 2, static: true}} title={'4'} body={''}></TextWidget>
        <TextWidget key="5" _grid={{x: 3, y: 2, w: 6, h: 2, static: true}} title={'5'} body={''}></TextWidget>
      </Board>
    ),
    document.getElementById('root')
  )
})
