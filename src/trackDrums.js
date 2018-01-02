/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import Audio from './audio/audio.js'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playingDrums: false
    }
    this.handleAKeyPress = this.handleAKeyPress.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKeyPress, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleAKeyPress, false)
  }

  handleAKeyPress(event) {
    if (event.key === '=') {
      if (this.state.playingDrums === true) {
        this.audioDrums.stop()
        this.audioDrums.play()
      } else {
        this.setState({
          playingDrums: true
        })
      }
    }
    if (event.key === '-') {
      if (this.state.playingDrums === true) {
        this.audioDrums.stop()
        this.setState({
          playingDrums: false
        })
      }
    }
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playingDrums}
          ref={ref => (this.audioDrums = ref)}
          src={Audio.two}
        />
      </div>
    )
  }
}
export default TrackSamples
