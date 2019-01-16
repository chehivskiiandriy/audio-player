import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import AudioPlayer from './containers/AudioPlayer'
import { theme } from './styles/theme'

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <AudioPlayer />
      </ThemeProvider>
    )
  }
}

export default App
