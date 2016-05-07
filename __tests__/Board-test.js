jest.unmock('../src/Board.js')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import Board from '../src/Board.js'
import TextWidget from '../src/widgets/TextWidget.js'

describe('Board', () => {
/*
  it('has no child components', () => {
    const board = TestUtils.renderIntoDocument(
      <Board layoutType={'static'} cols={12} rowHeight={210}>
      </Board>
    )

    const node = ReactDOM.findDOMNode(board)

    expect(node.children.length).toEqual(0)
  })
*/

  it('render child components', () => {
    const board = TestUtils.renderIntoDocument(
      <Board layoutType={'static'} cols={12} rowHeight={210} width={1280}>
        <TextWidget key='1' _grid={{x: 0, y: 0, w: 4, h: 2, static: true}}>widget1</TextWidget>
        <TextWidget key='2' _grid={{x: 4, y: 0, w: 4, h: 2, static: true}}>widget2</TextWidget>
        <TextWidget key='3' _grid={{x: 8, y: 0, w: 4, h: 2, static: true}}>widget3</TextWidget>
      </Board>
    )

    const node = ReactDOM.findDOMNode(board)

    expect(node.children.length).toEqual(3)
  })
})
