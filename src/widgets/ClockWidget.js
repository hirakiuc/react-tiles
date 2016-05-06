/*
 * ClockWidget
 *
 * Ref: https://cssanimation.rocks/clocks/
 */
import React from 'react'
import Widget from '../Widget'

import '../../stylus/clock_widget.styl'

export default class ClockWidget extends Widget {
  componentDidMount() {
    this.initLocalClocks()
    this.setUpMinuteHands()
    this.moveSecondHands()
  }

  initLocalClocks() {
    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()

    const hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      },
      {
        hand: 'seconds',
        angle: (seconds * 6)
      }
    ]

    const myClock = this.refs.myClock
    for (let hand of hands) {
      const elements = myClock.querySelectorAll('.' + hand.hand)

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const style = 'rotateZ(' + hand.angle + 'deg)'

        element.style.webkitTransform = style
        element.style.transform = style

        if (hand.hand == 'minutes') {
          element.parentNode.setAttribute('data-second-angle', hands[2].angle)
        }
      }
    }
  }

  /**
   * Set a timeout for the first minute hand movement (less than 1 minute),
   * then rotate it every minute after that.
   */
  setUpMinuteHands() {
    const containers = this.refs.myClock.querySelectorAll('.minutes-container')
    const secondAngle = containers[0].getAttribute('data-second-angle')
    if (secondAngle > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      const delay = (((360 - secondAngle) / 6) + 0.1) * 1000
      setTimeout( () => {
        this.moveMinuteHands(containers)
      }, delay)
    }
  }

  /**
   *  Do the first minute's rotation
   */
  moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)'
      containers[i].style.transform = 'rotateZ(6deg)'
    }

    // Then continue with a 60 second interval
    setInterval( () => {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12
        } else {
          containers[i].angle += 6
        }

        const style = 'rotateZ(' + containers[i].angle + 'deg)'

        containers[i].style.webkitTransform = style
        containers[i].style.transform = style
      }
    }, 60000)
  }

  /*
   * Move the second containers
   */
  moveSecondHands() {
    const containers = this.refs.myClock.querySelectorAll('.seconds-container')
    setInterval( () => {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6
        } else {
          containers[i].angle += 6
        }

        const style = 'rotateZ(' + containers[i].angle + 'deg)'
        containers[i].style.webkitTransform = style
        containers[i].style.transform = style
      }
    }, 1000)
  }

  render() {
    return (
      <div ref='myClock' className='widget clock-widget' _grid={this.props._grid}>
        <article className='clock simple'>
          <div className='hours-container'>
            <div className='hours'></div>
          </div>
          <div className='minutes-container'>
            <div className='minutes'></div>
          </div>
          <div className='seconds-container'>
            <div className='seconds'></div>
          </div>
        </article>
      </div>
    )
  }
}

ClockWidget.propTypes = {}
