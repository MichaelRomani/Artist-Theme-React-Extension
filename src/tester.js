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
      aKey: 'box',
      sKey: 'box',
      dKey: 'box',
      fKey: 'box',
      gKey: 'box',
      hKey: 'box',
      jKey: 'box'
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false)
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyPress(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    tempArr = tempArr.concat(' active')
    eval(`this.setState({ ${event.key}Key: tempArr })`)
  }

  handleKeyUp(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    tempArr = tempArr.slice(0, 3)
    eval(`this.setState({ ${event.key}Key: tempArr })`)
  }

  render() {
    return (
      <div className="a">
        <div>
          <h1>DRUM PAD</h1>
          <div className="pad">
            <div className={this.state.aKey}>A</div>
            <div className={this.state.sKey}>S</div>
            <div className={this.state.dKey}>D</div>
            <div className={this.state.fKey}>F</div>
            <div className={this.state.gKey}>G</div>
            <div className={this.state.hKey}>H</div>
            <div className={this.state.jKey}>J</div>
          </div>
          <div>
            <TrackSamples />
            <TrackDrums />
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
