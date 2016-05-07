jest.unmock('../src/widgets/TextWidget.js')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

import TextWidget from '../src/widgets/TextWidget.js'

describe('TextWidget', () => {
  it('render text widget', () => {
    const Title = 'test-title'
    const Body = 'test-body'
    const Moreinfo = 'test-moreinfo'
    const Updated_at = 'test-updated_at'
    const Grid = { x: 0, y: 0, w: 12, h: 2, static: true }

    const widget = TestUtils.renderIntoDocument(
      <TextWidget _grid={Grid} title={Title} body={Body} moreinfo={Moreinfo} updated_at={Updated_at} />
    )

    const node = ReactDOM.findDOMNode(widget)

    // HolderNode test
    const holderNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'widget')
    expect(holderNode.childNodes.length).toEqual(4)

    // Title Node test
    const titleNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'title')
    expect(titleNode.textContent).toEqual(Title)

    // Body Node test
    const bodyNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'body')
    expect(bodyNode.textContent).toEqual(Body)

    // more-info Note test
    const moreInfoNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'more-info')
    expect(moreInfoNode.textContent).toEqual(Moreinfo)

    // updated-at Node test
    const updatedAtNode = TestUtils.findRenderedDOMComponentWithClass(widget, 'updated-at')
    expect(updatedAtNode.textContent).toEqual(Updated_at)
  })
})
