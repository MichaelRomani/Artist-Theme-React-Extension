import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import { connect } from 'react-redux'
import DrakeDrum from './audio/audioDrakeDrum.js'
import DipsetDrum from './audio/audio'
import ChooseASongPrompt from './audio/chooseASongPrompt';

class DrumTrack extends Component {
  constructor(props) {
    super(props)
    this.didMount = false
  }

  componentDidMount() {
    this.didMount = true
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
          playing={this.props.beat}
          ref={ref => (this.audioDrums = ref)}
          src={song}
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

export default connect(mapState)(DrumTrack)
