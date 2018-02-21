import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import GLogo from './gLogo'

const App = props => {
    return (
      <Provider store={store}>
        <GLogo />
      </Provider>
    )
}

export default App
