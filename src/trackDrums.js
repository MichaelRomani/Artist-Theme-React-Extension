import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import { connect } from 'react-redux'
import DrakeDrum from './audio/audioDrakeDrum.js'
import DipsetDrum from './audio/audio'
import ChooseASongPrompt from './audio/chooseASongPrompt';
import { togglePlay } from './store/store'

class DrumTrack extends Component {
  constructor(props) {
    super(props)
    this.didMount = false
    this.toggleBeatPlay = this.toggleBeatPlay.bind(this)
  }

  componentDidMount() {
    this.didMount = true
  }

  toggleBeatPlay() {
    this.props.togglePlay(!this.props.beatPlaying)
  }

  render() {
    let song
    switch (this.props.currentSong) {
      case 'Dipset-Anthem':
        song = DipsetDrum.two
        break
      case 'Drake-0-100':
        song = DrakeDrum.one
        break
      case '':
        song = ChooseASongPrompt.one
        break
      default:
        song = ''
        break
    }
    if (!this.props.beat && this.didMount) this.audioDrums.stop()
    return (
      <div>
        <ReactHowler
          playing={this.props.beatPlaying}
          ref={ref => (this.audioDrums = ref)}
          src={song}
          onEnd={this.toggleBeatPlay}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentSong: state.currentSong,
    beatPlaying: state.beatPlaying
  }
}

const mapDispatch = dispatch => {
  return {
    togglePlay: bool => dispatch(togglePlay(bool))
  }
}

export default connect(mapState, mapDispatch)(DrumTrack)
