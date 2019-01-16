/* eslint-disable no-undef */
import React, { Component } from 'react'

import Progress from '../Progress'
import Controls from '../Controls'
import { PlayerContainer } from './style'
import { PlayerContext } from '../../containers/AudioPlayer'

class Player extends Component {
  state = {
    volume: 0.7
  }

  componentDidMount () {
    this.updateVolume(this.state.volume)
  }

  updateVolume = volume => {
    if (typeof volume === 'number' && volume !== this.audio.volume) {
      this.audio.volume = volume
      this.setState(() => ({ volume }))
    }
  }

  updateAudioTime = percent => {
    if (this.audio.duration) {
      this.audio.currentTime = percent * this.audio.duration
    } else {
      alert('Choose a track!!!')
    }
  }

  audioRef = node => { this.audio = node }

  render () {
    const { volume } = this.state
    const volumeWidth = `${volume * 100}%`

    return (
      <PlayerContext.Consumer>
        {({ state: { isPlaying, activeTrack }, progressWidth, handleTimeUpdate, handleAudioLoaded, handleNextTrack }) => (
          <>
            <audio
              src={activeTrack && activeTrack.source}
              onTimeUpdate={() => handleTimeUpdate(this.audio)}
              onLoadedData={() => handleAudioLoaded(this.audio)}
              onEnded={handleNextTrack}
              ref={this.audioRef} />
            <PlayerContainer>
              <Controls audio={this.audio} />
              <Progress width={progressWidth} clickHandler={this.updateAudioTime} />
              <Progress width={volumeWidth} clickHandler={this.updateVolume} />
            </PlayerContainer>
          </>
        )}
      </PlayerContext.Consumer>
    )
  }
}

export default Player
