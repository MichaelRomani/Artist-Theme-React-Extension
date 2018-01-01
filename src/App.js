/*global chrome*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import TrackSamples from './trackSamples'
import TrackDrums from './trackDrums'
import $ from 'jquery'
import Tester from './tester'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Tester />
  }
}

export default App

// // let recordImg = document.getElementById('record-img')
// // let out = false
// // $(document).on('click', '#album', function() {
// //   if (!out) {
// //     recordImg.style = `
// //   position: absolute;
// //   margin-left: 47%;
// //   margin-right: auto;
// //   left: 0;
// //   right: 0;
// //   height:200px;
// //    z-index: 1;
// //    `
// //     out = true
// //   } else if (out) {
// //     recordImg.style = `
// //   position: absolute;
// //   margin-left: auto;
// //   margin-right: auto;
// //   left: 0;
// //   right: 0;
// //   height:200px;
// //    z-index: 1;
// //    `
// //     out = false
// //   }
// // })
