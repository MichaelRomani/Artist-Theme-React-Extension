import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import AudioDrakeDrum from './audio/audioDrakeDrum.js'

class TrackSamples extends Component {
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
    if (!this.props.beat && this.didMount) this.audioDrums.stop()
    return (
      <div>
        <ReactHowler
          playing={this.props.beat}
          ref={ref => (this.audioDrums = ref)}
          src={AudioDrakeDrum.one}
        />
      </div>
    )
  }
}
export default TrackSamples
