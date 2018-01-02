/*global chrome*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageRender: (
        <img
          alt="Google"
          height="92"
          id="hplogo"
          src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x"
          style={{ paddingTop: '109px' }}
          width="272"
          onload="window.lol&amp;&amp;lol()"
        />
      )
    }
  }

  render() {
    return <div>{this.state.imageRender}</div>
  }
}

export default App
