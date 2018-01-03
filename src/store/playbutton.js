import React from 'react'

/**
 * ACTION TYPES
 */
const PLAY_IMG = 'PLAY_IMG'

/**
 * INITIAL STATE
 */
const defaultButtonImg =
  'https://lh3.googleusercontent.com/PyHp7h1ae6xInrDLRjg5mmW0GiiQH4q0W2v5xv50vmOX7rtM4-xJ61WFMUXvc7_Xc6k=w300'

/**
 * ACTION CREATORS
 */
export const changePlayButtonImg = img => ({ type: PLAY_IMG, img })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = defaultButtonImg, action) {
  let newState = state
  switch (action.type) {
    case PLAY_IMG:
      newState = action.img
      return newState
    default:
      return state
  }
}
