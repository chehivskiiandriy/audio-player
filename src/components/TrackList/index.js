import React from 'react'

import { PlayerContext } from '../../containers/AudioPlayer/index'
import Track from '../Track'
import { Playlist } from './style'

const TrackList = () => {
  return (
    <PlayerContext.Consumer>
      {({ state: { playlist, activeTrack } }) => (
        (playlist.length)
          ? (
            <Playlist>
              {playlist.map(item => (
                <Track
                  key={item.id}
                  track={item}
                  active={item.id === (activeTrack && activeTrack.id)}
                />
              ))}
            </Playlist>
          )
          : (<p>Nothing found</p>)
      )}
    </PlayerContext.Consumer>
  )
}

export default TrackList
