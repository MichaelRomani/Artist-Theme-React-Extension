import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Tester from './tester'
import App from './App'
import $ from 'jquery'

//List of Divs
//#hplogo - top logo
//$('.fbar').remove()

// $('#hplogo').replaceWith(`
//       <body >
//       <div id=main-div>
//       </div>
//       </body>
//     `)
//.jsb - this is section w buttons
//#viewport - this is main screen, can append to put something on bottom end of screen

$('#hplogo').after(`
<body >
<div style="width: 1000px;" id=main-div>
</div>
</body>
`)

$('#hplogo').replaceWith(`
<body >
<div id=hplogo>
</div>
</body>
`)

// $('#hplogo').replaceWith(
//   `<img alt="Google" height="92" id="hplogo" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" style="padding-top:109px" width="272" onload="window.lol&amp;&amp;lol()">`
// )

$('.jsb').remove()

const beatButtons = document.getElementById('main-div')
const testApp = document.createElement('div')
testApp.id = 'root'
if (beatButtons) beatButtons.appendChild(testApp)
ReactDOM.render(<Tester />, document.getElementById('root'))

const mainLogo = document.getElementById('hplogo')
const app = document.createElement('div')
app.id = 'root2'
if (mainLogo) mainLogo.appendChild(app)
ReactDOM.render(<App />, document.getElementById('root2'))

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
// $('body').append(
//   `
// <div id='record-img'></div>
// `
// )

// // Get the element to prepend our app to from https://www.google.com.
// // This could be a specific element on a website or something more general like `document.body`.
// const viewport2 = document.getElementById('record-img')

// // Create a div to render the App component to.
// const app2 = document.createElement('div')

// // Set the app element's id to `root`.
// // This name is the same as the element that create-react-app renders to by default
// // so it will work on the development server too.
// app2.id = 'root'

// // Prepend the App to the viewport element in production if it exists on the page.
// // You could also use `appendChild` depending on your needs.
// if (viewport2) viewport2.appendChild(app2)

// // Render the App.
// ReactDOM.render(<App />, document.getElementById('root'))

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
