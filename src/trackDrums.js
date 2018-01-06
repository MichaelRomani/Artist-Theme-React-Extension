import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import { connect } from 'react-redux'
import DrakeDrum from './audio/audioDrakeDrum.js'
import DipsetDrum from './audio/audio'

class DrumTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playingDrums: false
    }
    this.didMount = false
  }

  componentDidMount() {
    this.didMount = true
  }

  render() {
    let song
    switch (this.props.currentSong) {
      case 'Dipset-Anthem':
        this.audioDrums.stop()
        song = DipsetDrum.two
        break
      case 'Drake-0-100':
        this.audioDrums.stop()
        song = DrakeDrum.one
        break
      default:
        song = 'nothing'
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
