/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import ReactHowler from 'react-howler'
import DipSetSamples from './audio/audio.js'
import DrakeSamples from './audio/audioDrakeSample'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playingSample: false,
      playingSampleTwo: false
    }
    this.BMP = 0
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
    switch (this.props.currentSong) {
      case 'Dipset-Anthem':
        this.BPM = 84
        break
      case 'Drake-0-100':
        this.BPM = 90
        break
      default:
        this.BPM = 0
        break
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    if (event.key === 'a') {
      if (this.state.playingSample === true) {
        this.audio.stop()
        this.audio.play()
      } else {
        this.setState({
          playingSample: true
        })
      }
    }
    if (event.key === 's') {
      let audioStartPoint = 60 / this.BPM * 1
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'd') {
      let audioStartPoint = 60 / this.BPM * 2
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'f') {
      let audioStartPoint = 60 / this.BPM * 3
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'g') {
      let audioStartPoint = 60 / this.BPM * 4
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'h') {
      let audioStartPoint = 60 / this.BPM * 5
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'j') {
      let audioStartPoint = 60 / this.BPM * 6
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }

    if (event.key === 'k') {
      let audioStartPoint = 60 / this.BPM * 7
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }

    if (event.key === 'l') {
      if (this.state.playingSample === true) {
        this.audio.stop()
        this.setState({
          playingSample: false
        })
      }
    }
  }

  render() {
    let songSample
    switch (this.props.currentSong) {
      case 'Dipset-Anthem':
        songSample = DipSetSamples.one
        break
      case 'Drake-0-100':
        songSample = DrakeSamples.one
        break
      default:
        songSample = 'nothing'
        break
    }
    return (
      <div>
        <ReactHowler
          playing={this.state.playingSample}
          ref={ref => (this.audio = ref)}
          src={songSample}
        />
        {/* <ReactHowler
          playing={this.state.playingSampleTwo}
          ref={ref => (this.audioTwo = ref)}
          src={Audio.two}
        /> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentSong: state.currentSong
  }
}
export default connect(mapState)(TrackSamples)
