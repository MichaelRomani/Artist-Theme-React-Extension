import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHowler from 'react-howler'
import DipSetSamples from './audio/audio.js'
import DrakeSamples from './audio/audioDrakeSample'
import './App.css'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playingSample: false,
      timeoutCancel: 0
    }
    this.volume = 0
    this.handleAKey = this.handleAKey.bind(this)
    this.playSound = this.playSound.bind(this)
    this.startSound = this.startSound.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleAKey, false);
  }

  playSound(audioStartPoint){
    clearTimeout(this.state.timeoutCancel)
    let timeStop = (60 / this.BPM) * 1000
    this.audio.seek(audioStartPoint)
    let timeout = setTimeout(() => this.audio.stop(), timeStop )
    this.setState({timeoutCancel: timeout})
  }

  startSound(audioStartPoint) {
    this.audio.seek(audioStartPoint)
        let timeStop = (60 / this.BPM) * 1000
        let timeout = setTimeout(() => this.audio.stop(), timeStop )
        this.setState({timeoutCancel: timeout})
  }


  handleAKey(event) {
    if (event.key === 'a') {
      if (this.state.playingSample) {
      this.playSound(0)
      } else {
        this.setState({
          playingSample: true
        })
        this.startSound(0)
      }
    }
    if (event.key === 's') {
      let audioStartPoint = 60 / this.BPM * 1
      if (this.state.playingSample) {
      this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }
    if (event.key === 'd') {
      let audioStartPoint = 60 / this.BPM * 2
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }
    if (event.key === 'f') {
      let audioStartPoint = 60 / this.BPM * 3
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }
    if (event.key === 'g') {
      let audioStartPoint = 60 / this.BPM * 4
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }
    if (event.key === 'h') {
      let audioStartPoint = 60 / this.BPM * 5
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }
    if (event.key === 'j') {
      let audioStartPoint = 60 / this.BPM * 6
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }

    if (event.key === 'k') {
      let audioStartPoint = 60 / this.BPM * 7
      if (this.state.playingSample) {
        this.playSound(audioStartPoint)
      }
      else {
        this.setState({
          playingSample: true
        })
        this.startSound(audioStartPoint)
      }
    }

    if (event.key === 'l') {
      if (this.state.playingSample) {
        this.audio.stop()
        this.setState({
          playingSample: false
        })
      }
    }
  }

  render() {
    switch (this.props.currentSong) {
      case 'Dipset-Anthem':
        this.BPM = 84
        this.volume = 1
        break
      case 'Drake-0-100':
        this.BPM = 90
        this.volume = 0.39
        break
      default:
        this.BPM = 0
        break
    }
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
          volume={this.volume}
        />
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
