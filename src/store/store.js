import { createStore, combineReducers } from 'redux'
import googleLogo from './googleLogo'

const reducer = combineReducers({
  googleLogo
})

const store = createStore(reducer)

export default store

export * from './googleLogo'
