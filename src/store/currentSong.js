/**
 * ACTION TYPES
 */
const CURRENT_SONG = 'CURRENT_SONG'

/**
 * INITIAL STATE
 */
const defaultSong = ''

/**
 * ACTION CREATORS
 */
export const changeSong = song => ({ type: CURRENT_SONG, song })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = defaultSong, action) {
  let newState = state
  switch (action.type) {
    case CURRENT_SONG:
      newState = action.song
      return newState
    default:
      return state
  }
}
