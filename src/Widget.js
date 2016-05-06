import React from 'react'

export default class Widget extends React.Component {
  constructor(props) {
    super(props)
    this.onLayoutChange = this.onLayoutChange.bind(this)
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout)
  }

  render() {
    return (
      <div className='widget'></div>
    )
  }
}

Widget.propTypes = {
  _grid: React.PropTypes.object,isRequired,
  onLayoutChange: React.PropTypes.func
}
