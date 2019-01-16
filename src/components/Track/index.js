import React from 'react'

import { PlayerContext } from '../../containers/AudioPlayer/index'
import { TrackContainer, TrackTime, TrackName, TrackWrapper } from './style'
import { ProgressBar } from '../Progress/style'

const Track = ({ track, active }) => {
  return (
    <PlayerContext.Consumer>
      {({ progressWidth, progressTime, changeActiveTrack }) => (
        <TrackWrapper onClick={() => changeActiveTrack({ ...track })}>
          <TrackContainer>
            {active && <ProgressBar />}
            <TrackName>{track.artistName} - {track.trackName}</TrackName>
            <TrackTime>{active ? progressTime : track.duration}</TrackTime>
          </TrackContainer>
        </TrackWrapper>
      )}
    </PlayerContext.Consumer>
  )
}

export default Track
