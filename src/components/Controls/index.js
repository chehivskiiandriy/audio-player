import React from 'react'

import { PreviousIcon, PlayIcon, NextIcon, PauseIcon } from '../Icons'
import { ControlsContainer } from './style'
import { PlayerContext } from '../../containers/AudioPlayer/index'

const Controls = ({ audio }) => {
  return (
    <PlayerContext.Consumer>
      {({ state: { isPlaying }, handlePlay, handlePause, handlePreviousTrack, handleNextTrack }) => (
        <ControlsContainer>
          <PreviousIcon cursor='pointer' fontSize='1.6rem' fill='#555' onClick={handlePreviousTrack} />
          {isPlaying
            ? (<PauseIcon cursor='pointer' fontSize='1.6rem' fill='#555' onClick={() => handlePause(audio)} />)
            : (<PlayIcon cursor='pointer' fontSize='1.6rem' fill='#555' onClick={() => handlePlay(audio)} />)
          }
          <NextIcon cursor='pointer' fontSize='1.6rem' fill='#555' onClick={handleNextTrack} />
        </ControlsContainer>
      )}
    </PlayerContext.Consumer>
  )
}

export default Controls
