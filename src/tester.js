/*global chrome*/
import React, { Component } from 'react'
import './App.scss'
import TrackSamples from './trackSamples'
import TrackDrums from './trackDrums'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aKey: false,
      sKey: false,
      dKey: false,
      fKey: false,
      gKey: false,
      hKey: false,
      jKeya: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false)
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyPress(event) {
    eval(`this.setState({ ${event.key}Key: true })`)
  }

  handleKeyUp(event) {
    eval(`this.setState({ ${event.key}Key: false })`)
  }

  render() {
    let thisHolder = this
    return (
      <div className="a">
        <div>
          <h1>DRUM PAD</h1>
          <div className="pad">
            {['A', 'S', 'D', 'F', 'G', 'H', 'J'].map(keyLetter => {
              let keyStateBool = eval(
                `${thisHolder}.state.${keyLetter.toLowerCase()}Key`
              )
              return (
                <div
                  key={keyLetter}
                  className={keyStateBool ? 'box active' : 'box'}
                >
                  {keyLetter}
                </div>
              )
            })}

            {/* <div style={this.state.aKey ? style1 : style2} data-code="82">
              A
            </div>
            <div className="box pad-2" data-code="84">
              S
            </div>
            <div className="box pad-3" data-code="89">
              D
            </div>
            <div className="box pad-4" data-code="85">
              F
            </div>
            <div className="box pad-5" data-code="70">
              G
            </div>
            <div className="box pad-6" data-code="71">
              H
            </div>
            <div className="box pad-7" data-code="72">
              J
            </div>
            <div className="box pad-8" data-code="74">
              K
            </div> */}
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
