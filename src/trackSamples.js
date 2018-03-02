import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactHowler from 'react-howler'
import DipSetSamples from './audio/audio.js'
import DrakeSamples from './audio/audioDrakeSample'
import { keyPress } from './utils'

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
    this.setStartingPoint = this.setStartingPoint.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentSong !== this.props.currentSong) this.audio.stop()
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleAKey, false)
  }

  playSound(audioStartPoint) {
    clearTimeout(this.state.timeoutCancel)
    let timeStop = 60 / this.BPM * 1000
    this.audio.seek(audioStartPoint)
    let timeout = setTimeout(() => this.audio.stop(), timeStop)
    this.setState({ timeoutCancel: timeout })
  }

  startSound(audioStartPoint) {
    this.audio.seek(audioStartPoint)
    let timeStop = 60 / this.BPM * 1000
    let timeout = setTimeout(() => this.audio.stop(), timeStop)
    this.setState({ timeoutCancel: timeout })
  }

  setStartingPoint(beatNum) {
    let audioStartPoint = 60 / this.BPM * beatNum
    if (this.state.playingSample) {
      this.playSound(audioStartPoint)
    } else {
      this.setState({ playingSample: true })
      this.startSound(audioStartPoint)
    }
  }

  handleAKey(event) {
    if (event.key === 'a') {
      if (this.state.playingSample) {
        this.playSound(0)
      }
      else {
        this.setState({ playingSample: true })
        this.startSound(0)
      }
    }
    else if ('sdfghjk'.indexOf(event.key) > -1) {
      this.setStartingPoint(keyPress(event.key))
    }
    else if (event.key === 'l') {
      if (this.state.playingSample) {
        this.audio.stop()
        this.setState({ playingSample: false })
      }
    }
  }

  render() {
    if (this.props.currentSong === 'Dipset-Anthem') {
      this.BPM = 84
      this.volume = 1
    }
    else if (this.props.currentSong === 'Drake-0-100') {
      this.BPM = 90
      this.volume = 0.39
    }
    let songSample;
    if (this.props.currentSong === 'Dipset-Anthem') {
      songSample = DipSetSamples.one
    }
    else if (this.props.currentSong === 'Drake-0-100') {
      songSample = DrakeSamples.one
    }
    return (
      <ReactHowler
        playing={this.state.playingSample}
        ref={ref => (this.audio = ref)}
        src={songSample}
        volume={this.volume}
      />
    )
  }
}

const mapState = state => {
  return {
    currentSong: state.currentSong
  }
}

export default connect(mapState)(TrackSamples)
