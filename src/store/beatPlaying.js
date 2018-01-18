/**
 * ACTION TYPES
 */
const BEAT_PLAYING = 'BEAT_PLAYING'

/**
 * INITIAL STATE
 */
const defaultBool = false

/**
 * ACTION CREATORS
 */
export const togglePlay = bool => ({ type: BEAT_PLAYING, bool })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
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
