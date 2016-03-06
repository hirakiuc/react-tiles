import React from 'react'
import Widget from '../Widget'

export default class TextWidget extends Widget {
  render() {
    return (
      <div className='widget text-widget' _grid={this.props._grid}>
        <h1 className='title'>{this.props.title}</h1>
        <div className='body'>{this.props.body}</div>
        <p className='more-info'>{this.props.moreinfo}</p>
        <p className='updated-at'>{this.props.updated_at}</p>
      </div>
    )
  }
}

TextWidget.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
  moreinfo: React.PropTypes.string,
  updated_at: React.PropTypes.string
}
