import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './App2'

import $ from 'jquery'

// var $ = jQuery

var num = {
  '12/27': {
    url:
      'https://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/i2yrqdiqinpelgvyn8cj.jpg',
    data:
      'DMX released his second album Flesh Of My Flesh Blood Of My Blood December 22, 1998'
  }
}

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
$('#hplogo').replaceWith(
  `
<div id='record-img'></div>
`
)

//-------

let main = document.getElementById('viewport')
if (main) {
  main.style =
    "background-image: url('http://filmmusicreporter.com/wp-content/uploads/2015/12/nas.jpg'); background-size: 160% ;"
  // ('http://filmmusicreporter.com/wp-content/uploads/2015/12/nas.jpg')"
}

//-------
//Element - seemingly occassional (holiday themed)
let addedElBelowSearch = document.getElementById('prm-pt')
if (addedElBelowSearch) addedElBelowSearch.remove()
//-------

//-------
//side panel after search
let sidePanel = document.getElementById('rhs_block')
$(sidePanel).replaceWith('<p>mike</p>')
//-------

//-------
//footer - removes
$('.fbar').remove()
//-------

//-------
//hides something....
$('#gbqfbb').remove()
//-------

//--------
//adds button - wiki
//add spotify
let spotEl = $(
  `<iframe src="https://open.spotify.com/embed/user/nas/playlist/4TI7tEKz4xsfgvwucSPVVB" style=" width:400px; height:140px; margin-top: 15px;"   frameborder="0" allowtransparency="true"/>`
)
$('.jsb')
  .find('center')
  .append(
    `<a  href="https://en.wikipedia.org/wiki/Illmatic" style='height: 36px;
		background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
		background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    color: #757575;
    font-family: arial,sans-serif;
    font-size: 13px;
    font-weight: bold;
    margin: 11px 4px;
    padding: 10px 30px;
		text-align: center;
		text-decoration: none;
		'>Illmatic - Wiki</a>`
  ) //adds spotify
  .append(spotEl)
//--------

//--------
//Google search page - image left of search
$('#logocont')
  .find('img')
  .replaceWith(
    `<iframe src="https://open.spotify.com/embed/user/nas/playlist/4TI7tEKz4xsfgvwucSPVVB" style=" width:80px; height:120px; margin-left: 15px "   frameborder="0" allowtransparency="true"></iframe>`
  )
//--------

$(document).on('click', '#album', function() {
  $(document).on('trigger', '#play-button', function() {})
})

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
const viewport = document.getElementById('record-img')

// Create a div to render the App component to.
const app = document.createElement('div')

// Set the app element's id to `root`.
// This name is the same as the element that create-react-app renders to by default
// so it will work on the development server too.
app.id = 'root2'

// Prepend the App to the viewport element in production if it exists on the page.
// You could also use `appendChild` depending on your needs.

if (viewport) {
  viewport.appendChild(app)
}
// Render the App
ReactDOM.render(<App2 />, document.getElementById('root2'))
