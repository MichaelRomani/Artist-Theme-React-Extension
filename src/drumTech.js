import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Tester from './tester'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Tester />
      </Provider>
    )
  }
}

export default App
