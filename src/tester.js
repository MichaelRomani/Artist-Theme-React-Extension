/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import TrackSamples from './trackSamples'
import TrackDrums from './trackDrums'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aKey: 'box pad-1',
      sKey: 'box pad-2',
      dKey: 'box pad-3',
      fKey: 'box pad-4',
      gKey: 'box pad-5',
      hKey: 'box pad-6',
      jKey: 'box pad-7',
      kKey: 'box pad-8',
      beatPlaying: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.startBeat = this.startBeat.bind(this)
    this.showVideoToggle = this.showVideoToggle.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false)
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress, false)
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyPress(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    if (tempArr.length <= 9) {
      tempArr = tempArr.concat(' active')
      eval(`this.setState({ ${event.key}Key: tempArr })`)
    }
  }

  handleKeyUp(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    tempArr = tempArr.slice(0, 9)
    eval(`this.setState({ ${event.key}Key: tempArr })`)
  }

  showVideoToggle() {
    this.setState({ showVideo: !this.state.showVideo })
  }

  startBeat() {
    this.setState({ beatPlaying: !this.state.beatPlaying })
  }

  render() {
    return (
      <div className="a">
        <div>
          <div className="pad">
            <div className={this.state.aKey}>A</div>
            <div className={this.state.sKey}>S</div>
            <div className={this.state.dKey}>D</div>
            <div className={this.state.fKey}>F</div>
            <div className={this.state.gKey}>G</div>
            <div className={this.state.hKey}>H</div>
            <div className={this.state.jKey}>J</div>
            <div className={this.state.kKey}>K</div>
          </div>
          <div className="button-holder">
            <button className="play-button" onClick={this.startBeat}>
              {this.state.beatPlaying ? 'Stop' : 'Play'}
            </button>
            <button className="play-button" onClick={this.showVideoToggle}>
              Watch Tutorial
            </button>
          </div>
          <div>
            {this.state.beatPlaying ? <TrackSamples /> : <div />}
            <TrackDrums beat={this.state.beatPlaying} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

// let recordImg = document.getElementById('record-img')
// let out = false
// $(document).on('click', '#album', function() {
//   if (!out) {
//     recordImg.style = `
//   position: absolute;
//   margin-left: 47%;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   height:200px;
//    z-index: 1;
//    `
//     out = true
//   } else if (out) {
//     recordImg.style = `
//   position: absolute;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   height:200px;
//    z-index: 1;
//    `
//     out = false
//   }
// })
