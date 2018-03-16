import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import DrumPads from './drumPads'

const App = () => {
  return (
    <Provider store={store}>
      <DrumPads />
    </Provider>
  )
}

export default App
