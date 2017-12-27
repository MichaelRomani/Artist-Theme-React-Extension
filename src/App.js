/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import TrackSamples from './trackSamples'
import TrackDrums from './trackDrums'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: false
    }
    this.value = 0
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    console.log(event)
    if (event.key === ' ') this.value++
    console.log(this.value)
    if (this.value >= 5) this.setState({ player: true })
  }

  render() {
    return (
      <div className="App">
        {this.state.player ? (
          <div>
            <TrackSamples />
            <TrackDrums />
            <h1>ROMANI</h1>
            <h3>'+' plays background beat</h3>
            <h3>'-' stops background beat</h3>
            <h3>'[' plays sample 1</h3>
            <h3>']' plays sample 2</h3>
          </div>
        ) : (
          ''
        )}
        <h3>Hit Spacebar 5 X to initialize Player</h3>
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
