import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Tester from './tester'

const App = () => {
  return (
    <Provider store={store}>
      <Tester />
    </Provider>
  )
}

export default App
