jest.unmock('../src/widgets/ClockWidget.js')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

// import ClockWidget from '../src/widgets/ClockWidget.js'
/*
 * ClockWidget import stylus file.
 * This cause `Error: Line 1: Unexpected token .`
 *
 * See https://github.com/facebook/jest/issues/334
 */

/*
describe('ClockWidget', () => {
  it('render clock widget', () => {
    const Grid = { x: 0, y: 0, w: 12, h: 2, static: true}

    const widget = TestUtils.renderIntoDocument(
      <ClockWidget key='1' _grid={Grid} />
    )

    const node = ReactDOM.findDOMNode(widget)

    // HolderNode test
    const holderNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'widget')
    console.log(holderNode.className)
  })
})
*/
