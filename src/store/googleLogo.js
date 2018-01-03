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
      height="92"
      id="hplogo"
      src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x"
      style={{ paddingTop: '109px' }}
      width="272"
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
