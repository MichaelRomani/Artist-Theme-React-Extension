import { createStore, combineReducers } from 'redux'
import googleLogo from './googleLogo'
import playButton from './playbutton'

const reducer = combineReducers({
  googleLogo,
  playButton
})

const store = createStore(reducer)

export default store

export * from './googleLogo'
export * from './playbutton'
