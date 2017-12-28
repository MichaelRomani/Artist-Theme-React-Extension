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
      player: false,
      password: '',
      buttonAlt: 0
    }
    this.value = 0
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    this.setState({ password: this.state.password.concat(event.key) })
    if (this.state.password.indexOf('dipsetdipsetdipset') > -1)
      $('body').replaceWith(`
      <body id=main-div>
      <div id=main-div>
      <h1>DRUM PAD</h1>
        <div class="pad">
          <div class="box pad-1" data-code="82">A</div>
          <div class="box pad-2" data-code="84">S</div>
          <div class="box pad-3" data-code="89">D</div>
          <div class="box pad-4" data-code="85">F</div>
          <div class="box pad-5" data-code="70">G</div>
          <div class="box pad-6" data-code="71">H</div>
          <div class="box pad-7" data-code="72">J</div>
          <div class="box pad-8" data-code="74">K</div>
        </div>
      </div>

      </body>
    `)
    this.setState({ player: true })
  }

  render() {
    $(window).keydown(function(e) {
      let code = e.keyCode
      $("div[data-code='" + code + "']").addClass('active')
    })
    $(window).keyup(function(e) {
      let code = e.keyCode
      $("div[data-code='" + code + "']").removeClass('active')
    })
    return (
      <div className="App">
        {this.state.player ? (
          <div>
            <TrackSamples />
            <TrackDrums />
          </div>
        ) : (
          ''
        )}
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
