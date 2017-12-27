/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import TrackSamples from './trackSamples'
import TrackDrums from './trackDrums'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <TrackSamples />
        <TrackDrums />
        <img
          alt="nas-record"
          id="record-img"
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            height: '200px',
            zIndex: 1
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/8/88/45_rpm_record.png"
        />
        <img
          onClick={this.showHideRecord}
          alt="nas-record"
          id="album"
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            height: '200px',
            zIndex: 3
          }}
          src="https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/i2yrqdiqinpelgvyn8cj.jpg"
        />
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
