//Action Types
const CURRENT_SONG = 'CURRENT_SONG'

//Initial State
const defaultSong = ''

//Action Creators
export const changeSong = song => ({ type: CURRENT_SONG, song })

//Reducer
export default function(state = defaultSong, action) {
  let newState = state
  switch (action.type) {
    case CURRENT_SONG:
      newState = action.song
      return newState
    default:
      return newState
  }
}
