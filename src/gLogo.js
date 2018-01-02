import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class GLogo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.logo
  }
}

const mapState = state => {
  return {
    logo: state.googleLogo
  }
}

export default connect(mapState)(GLogo)
