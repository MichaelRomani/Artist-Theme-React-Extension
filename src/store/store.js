import { createStore, combineReducers } from 'redux'
import googleLogo from './googleLogo'
import currentSong from './currentSong'

const reducer = combineReducers({
  googleLogo,
  currentSong
})

const store = createStore(reducer)

export default store

export * from './googleLogo'
export * from './currentSong'
