//Action Types
const BEAT_PLAYING = 'BEAT_PLAYING'

//Initial State
const defaultBool = false

//Action Creators
export const togglePlay = bool => ({ type: BEAT_PLAYING, bool })

//Reducer
export default function(state = defaultBool, action) {
  let newState = state
  switch (action.type) {
    case BEAT_PLAYING:
      newState = action.bool
      return newState
    default:
      return state
  }
}
