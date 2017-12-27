/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import audioEffects from './audio/audioEffects'

class TrackEffects1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecord: false,
      playing: false
    }
    this.handleAKeyEff1 = this.handleAKeyEff1.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKeyEff1, false)
  }

  handleAKeyEff1(event) {
    if (event.key === ';') {
      if (this.state.playing === true) {
        this.audioEffects1.stop()
        this.audioEffects1.play()
      } else {
        this.setState({
          playing: true
        })
      }
    }
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playing}
          ref={ref => (this.audioEffects1 = ref)}
          src={audioEffects.one}
        />
      </div>
    )
  }
}
export default TrackEffects1
