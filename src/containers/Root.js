import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Board from '../components/Board'

import '../style.styl'
import '../widget.styl'

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(
    <Board />,
    document.getElementById('root')
  )
})
