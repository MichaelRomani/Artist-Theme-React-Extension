import React from 'react'

//Action Types
const GOOGLE_LOGO = 'GOOGLE_LOGO'

//Initial State
const defaultLogo = (
  <div>
    <img
      alt="Google G Logo"
      style={{ height: 110, width: 110, marginTop: 70 }}
      src="https://ih1.redbubble.net/image.397523821.3440/flat,800x800,075,f.u2.jpg"
    />
  </div>
)

//Action Creators
export const changeLogo = logo => ({ type: GOOGLE_LOGO, logo })

//Reducer
export default function(state = defaultLogo, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case GOOGLE_LOGO:
      newState = action.logo
      return newState
    default:
      return newState
  }
}
