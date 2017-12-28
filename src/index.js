import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './App2'

import $ from 'jquery'

// var $ = jQuery

// var num = {
//   '12/27': {
//     url:
//       'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/i2yrqdiqinpelgvyn8cj.jpg',
//     data:
//       'DMX released his second album Flesh Of My Flesh Blood Of My Blood December 22, 1998'
//   }
// }

// var today = new Date()
// var dd = today.getDate()
// var mm = today.getMonth() + 1 //January is 0!
// var yyyy = today.getFullYear()

// if (dd < 10) {
//   dd = '0' + dd
// }

// if (mm < 10) {
//   mm = '0' + mm
// }

// today = mm + '/' + dd

// var newSrc = num[today].url
// var newSrcSet = num[today].url

//Removes main 'google logo' replaces with main
$('body').append(
  `
<div id='record-img'></div>
`
)

// Get the element to prepend our app to from https://www.google.com.
// This could be a specific element on a website or something more general like `document.body`.
const viewport2 = document.getElementById('record-img')

// Create a div to render the App component to.
const app2 = document.createElement('div')

// Set the app element's id to `root`.
// This name is the same as the element that create-react-app renders to by default
// so it will work on the development server too.
app2.id = 'root'

// Prepend the App to the viewport element in production if it exists on the page.
// You could also use `appendChild` depending on your needs.
if (viewport2) viewport2.appendChild(app2)

// Render the App.
ReactDOM.render(<App />, document.getElementById('root'))

// Get the element to prepend our app to from https://www.google.com.
// This could be a specific element on a website or something more general like `document.body`.
// ------------------
// ------------------
// ------------------
// ------------------
// const viewport = document.getElementById('record-img')

// // Create a div to render the App component to.
// const app = document.createElement('div')

// // Set the app element's id to `root`.
// // This name is the same as the element that create-react-app renders to by default
// // so it will work on the development server too.
// app.id = 'root2'

// // Prepend the App to the viewport element in production if it exists on the page.
// // You could also use `appendChild` depending on your needs.

// if (viewport) {
//   viewport.appendChild(app)
// }
// // Render the App
// ReactDOM.render(<App2 />, document.getElementById('root2'))
