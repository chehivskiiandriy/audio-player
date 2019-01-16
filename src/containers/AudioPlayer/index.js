/* eslint-disable no-undef */
import React, { Component } from 'react'

import Player from '../../components/Player'
import Search from '../../components/Search'
import TrackList from '../../components/TrackList'
import { Wrapper } from './style'
import { playlist } from '../../dummy'

export const PlayerContext = React.createContext()

class AudioPlayer extends Component {
  state = {
    isPlaying: false,
    currentTime: 0,
    loaded: false,
    duration: null,
    activeTrack: null,
    activePlaylist: [...playlist],
    playlist: [...playlist]
  }
  /* activePlaylist is used because we can search the tracks and the player will play the track
   * after we select the track in the list of tracks, the activePlaylist will become the playlist */

  handleTimeUpdate = audio => {
    this.setState(() => ({
      currentTime: audio.currentTime,
      duration: audio.duration
    }))
  }

  handleAudioLoaded = audio => {
    this.setState(() => ({
      duration: audio.duration,
      loaded: true
    }))
    if (this.state.isPlaying) {
      audio.play()
    }
  }

  checkIsTrackExist = () => {
    if (!this.state.activeTrack) {
      alert('Choose a track!!!')
      return false
    } else {
      return true
    }
  }
  handlePlay = audio => {
    if (!this.checkIsTrackExist()) {
      return
    }

    this.setState(() => ({ isPlaying: true }))
    audio.play()
  }

  handlePause = audio => {
    this.setState(() => ({ isPlaying: false }))
    audio.pause()
  }

  handlePreviousTrack = () => {
    if (!this.checkIsTrackExist()) {
      return
    }

    const { activePlaylist, activeTrack } = this.state
    let index = activePlaylist.findIndex(item => item.id === activeTrack.id)
    if (index === 0) {
      index = activePlaylist.length - 1
    } else {
      index--
    }
    this.setState(() => ({ activeTrack: { ...activePlaylist[index] } }))
  }

  handleNextTrack = () => {
    if (!this.checkIsTrackExist()) {
      return
    }

    const { activePlaylist, activeTrack } = this.state
    let index = activePlaylist.findIndex(item => item.id === activeTrack.id)
    if (index === activePlaylist.length - 1) {
      index = 0
    } else {
      index++
    }
    this.setState(() => ({ activeTrack: { ...activePlaylist[index] } }))
  }

  handleSearch = value => {
    const searchedPlaylist = playlist.filter(item => `${item.artistName} ${item.trackName}`.toLowerCase().includes(value))
    this.setState(() => ({ playlist: searchedPlaylist }))
  }

  changeActiveTrack = activeTrack => {
    this.setState((prevState) => ({ activeTrack, isPlaying: true, activePlaylist: [...prevState.playlist] }))
  }

  render () {
    const { loaded, duration, currentTime } = this.state
    const progressWidth = loaded ? `${(currentTime / duration) * 100}%` : '0%'

    const sec = Math.floor(currentTime % 60)

    const progressTime = loaded ? `${Math.floor(currentTime / 60)}:${sec < 10 ? '0' + sec : sec}` : '0:00'

    return (
      <PlayerContext.Provider value={{
        state: this.state,
        handleTimeUpdate: this.handleTimeUpdate,
        handleAudioLoaded: this.handleAudioLoaded,
        handlePlay: this.handlePlay,
        handlePause: this.handlePause,
        changeActiveTrack: this.changeActiveTrack,
        handlePreviousTrack: this.handlePreviousTrack,
        handleNextTrack: this.handleNextTrack,
        handleSearch: this.handleSearch,
        progressWidth,
        progressTime
      }}>
        <Wrapper>
          <Player />
          <Search />
          <TrackList />
        </Wrapper>
      </PlayerContext.Provider>
    )
  }
}

export default AudioPlayer
