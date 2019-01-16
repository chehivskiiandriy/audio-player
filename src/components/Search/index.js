import React, { Component } from 'react'

import { PlayerContext } from '../../containers/AudioPlayer/index'
import { Input } from './style'

class Search extends Component {
  state = {
    searchValue: ''
  }

  searchHandler = ({ target: { value } }, contextHandler) => {
    this.setState(() => ({ searchValue: value }))
    if (value.length > 2 || value.length === 0) {
      contextHandler(value)
    }
  }

  render () {
    return (
      <PlayerContext.Consumer>
        {({ handleSearch }) => (
          <Input
            value={this.state.searchValue}
            onChange={(e) => this.searchHandler(e, handleSearch)}
            placeholder='Search for artist or tracks'
          />
        )}
      </PlayerContext.Consumer>
    )
  }
}

export default Search
