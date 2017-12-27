/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import audio from './audio/audio'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecord: false,
      playing: false
    }
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    console.log(event)
    if (event.key === 'p') {
      if (this.state.playing === true) {
        this.audio.stop()
        this.audio.play()
      } else {
        this.setState({
          playing: true
        })
      }
    }
    if (event.key === 'o') this.audio.stop()
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playing}
          ref={ref => (this.audio = ref)}
          src={audio.two}
        />
      </div>
    )
  }
}
export default TrackSamples
