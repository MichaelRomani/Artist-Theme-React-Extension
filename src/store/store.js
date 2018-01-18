import { createStore, combineReducers } from 'redux'
import googleLogo from './googleLogo'
import currentSong from './currentSong'
import beatPlaying from './beatPlaying'

const reducer = combineReducers({
  googleLogo,
  currentSong,
  beatPlaying
})

const store = createStore(reducer)

export default store

export * from './googleLogo'
export * from './currentSong'
export * from './beatPlaying'
