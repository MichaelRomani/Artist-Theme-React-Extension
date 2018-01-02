import React from 'react'

/**
 * ACTION TYPES
 */
const GOOGLE_LOGO = 'GOOGLE_LOGO'

/**
 * INITIAL STATE
 */
const defaultLogo = (
  <div>
    <img
      alt="Google"
      height="180px"
      id="hplogo"
      src="http://www.google.com/logos/doodles/2017/44th-anniversary-of-the-birth-of-hip-hop-5102114591211520.3-2xa.gif"
      style={{ paddingTop: '20px' }}
      onload="window.lol&amp;&amp;lol()"
    />
  </div>
)

/**
 * ACTION CREATORS
 */
export const changeLogo = logo => ({ type: GOOGLE_LOGO, logo })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = defaultLogo, action) {
  let newState = state
  switch (action.type) {
    case GOOGLE_LOGO:
      newState = action.logo
      return newState
    default:
      return state
  }
}
