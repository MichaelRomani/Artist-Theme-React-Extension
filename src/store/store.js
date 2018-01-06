import { createStore, combineReducers } from 'redux'
import googleLogo from './googleLogo'
import playButton from './playbutton'
import currentSong from './currentSong'

const reducer = combineReducers({
  googleLogo,
  playButton,
  currentSong
})

const store = createStore(reducer)

export default store

export * from './googleLogo'
export * from './playbutton'
export * from './currentSong'
