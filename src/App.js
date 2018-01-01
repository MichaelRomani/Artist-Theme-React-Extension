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
    this.state = {
      player: false,
      password: '',
      change: true,
      counter: 0
    }
    this.value = 0
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    this.setState({ password: this.state.password.concat(event.key) })
    if (this.state.password.indexOf('dipsetdipsetdipset') > -1) {
      this.setState({ password: '' })

      $('body').replaceWith(`
      <body >
      <div id=main-div>
      </div>
      </body>
    `)
      const viewport2 = document.getElementById('main-div')
      const app2 = document.createElement('div')
      app2.id = 'root'
      if (viewport2) viewport2.appendChild(app2)
      // Render the App.
      ReactDOM.render(<Tester />, document.getElementById('root'))
      this.setState({ player: true })
    }
  }

  render() {
    return <div />
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
