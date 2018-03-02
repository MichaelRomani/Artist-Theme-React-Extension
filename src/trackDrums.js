import React, { Component } from 'react'
import ReactHowler from 'react-howler'
import { connect } from 'react-redux'
import DrakeDrum from './audio/audioDrakeDrum.js'
import DipsetDrum from './audio/audio'
import ChooseASongPrompt from './audio/chooseASongPrompt'
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
    if (this.props.currentSong === 'Dipset-Anthem') song = DipsetDrum.two
    else if (this.props.currentSong === 'Drake-0-100') song = DrakeDrum.one
    else if (!this.props.currentSong) song = ChooseASongPrompt.one
    if (!this.props.beat && this.didMount) this.audioDrums.stop()
    return (
      <ReactHowler
        playing={this.props.beatPlaying}
        ref={ref => (this.audioDrums = ref)}
        src={song}
        onEnd={this.toggleBeatPlay}
      />
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
