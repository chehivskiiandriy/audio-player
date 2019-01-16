import React, { Component } from 'react'

import { ProgressContainer, ProgressBar } from './style'

class Progress extends Component {
  handleClick = e => {
    const rect = this.node.getBoundingClientRect()
    const clientLeft = e.clientX
    const relativeLeft = clientLeft - rect.left
    this.props.clickHandler(relativeLeft / rect.width)
  }

  progressRef = node => { this.node = node }

  render () {
    return (
      <ProgressContainer
        ref={this.progressRef}
        onClick={this.handleClick}
      >
        <ProgressBar width={this.props.width} />
      </ProgressContainer>
    )
  }
}

export default Progress
