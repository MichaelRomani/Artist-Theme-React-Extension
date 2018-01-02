import { createStore, combineReducers } from 'redux'
import GoogleLogo from './googleLogo'

const reducer = combineReducers({
  GoogleLogo
})

const store = createStore(reducer)

export default store
