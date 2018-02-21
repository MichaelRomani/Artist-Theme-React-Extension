import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class GLogo extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return <img
    alt="Google"
    height="92"
    id="hplogo"
    src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x"
    style={{ paddingTop: '109px' }}
    width="272"
    onload="window.lol&amp;&amp;lol()"
  />
  }
}

const mapState = state => {
  return {
    logo: state.googleLogo
  }
}

export default connect(mapState)(GLogo)
