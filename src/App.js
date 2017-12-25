import React, { Component } from 'react'
import './App.css'
import $ from 'jquery'

// var $ = jQuery

var num = {
  '12/25': {
    url:
      'http://www.artefactmagazine.com/wp-content/uploads/2014/10/Nas-Illmatic.jpg',
    data:
      'DMX released his second album Flesh Of My Flesh Blood Of My Blood December 22, 1998'
  }
}

var today = new Date()
var dd = today.getDate()
var mm = today.getMonth() + 1 //January is 0!
var yyyy = today.getFullYear()

if (dd < 10) {
  dd = '0' + dd
}

if (mm < 10) {
  mm = '0' + mm
}

today = mm + '/' + dd

var newSrc = num[today].url
var newSrcSet = num[today].url

//---------
//Search bar, finds it, hids it, etc...
// let searchBarz = document.getElementsByClassName('sfibbbc')[0]
// console.log(searchBarz)
// let searchBar = document.getElementById('searchform')
// console.log(searchBar)
// $('#searchform')
//   .find('.sfibbbc')
//   .hide()
//-------

let main = document.getElementById('viewport')
if (main) {
  main.style =
    "background-image: url('http://filmmusicreporter.com/wp-content/uploads/2015/12/nas.jpg'); background-size: 160% ;"
  // ('http://filmmusicreporter.com/wp-content/uploads/2015/12/nas.jpg')"
}

//-------
// let main34 = document.getElementById('hplogo')

// $(main34).replaceWith(
//   `
// <img id='record-img' style='position: absolute;
// margin-left: auto;
// margin-right: auto;
// left: 0;
// right: 0;
// height:200px;
//  z-index: 1;' src='https://upload.wikimedia.org/wikipedia/commons/8/88/45_rpm_record.png'/>
// <img id='album' style='position: absolute;
// margin-left: auto;
// margin-right: auto;
// left: 0;
// right: 0;
// height:200px;
//  z-index: 3;' src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/NasIllmatic.jpg/220px-NasIllmatic.jpg'/>
// `
// )

// let recordImg = document.getElementById('record-img')
// let out = false
// $(document).on('click', '#album', function() {
//   if (!out) {
//     recordImg.style = `
//   position: absolute;
//   margin-left: 47%;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   height:200px;
//    z-index: 1;
//    `
//     out = true
//   } else if (out) {
//     recordImg.style = `
//   position: absolute;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   height:200px;
//    z-index: 1;
//    `
//     out = false
//   }
// })

//-------

//-------
//Element - seemingly occassional (holiday themed)
let addedElBelowSearch = document.getElementById('prm-pt')
if (addedElBelowSearch) addedElBelowSearch.remove()
//-------

//-------
//side panel after search
let sidePanel = document.getElementById('rhs_block')
// console.log(sidePanel)
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
  $(document).on('trigger', '#play-button', function() {
    console.log('here')
  })
})

//youtube video - hides a bunch of stuff
// '<iframe width="560" height="200" src="https://www.youtube.com/embed/3hOZaTGnHU4?rel=0&autoplay=1&showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'

//Don't remember - removes something, replaces with something...
//$('#hplogo').replaceWith(
//   `<img id='record' style="height: 140px; width: 140px; " src="http://thumbs.dreamstime.com/x/frame-side-8969240.jpg" /><img style="height: 185px; width: 185px" src="http://www.artefactmagazine.com/wp-content/uploads/2014/10/Nas-Illmatic.jpg" /><img id='record' style="height: 140px; width: 140px; -moz-transform: scaleX(-1);
// 	-o-transform: scaleX(-1);
// 	-webkit-transform: scaleX(-1);
// 	transform: scaleX(-1);
// 	filter: FlipH;
// 	-ms-filter: "FlipH";" src="http://thumbs.dreamstime.com/x/frame-side-8969240.jpg" />`
// )

//Local saved image placed in ext url
// var imgURL = chrome.extension.getURL('record.png')

//google get method (API)
// var xhr = new XMLHttpRequest()
// xhr.open(
//   'GET',
//   'https://78.media.tumblr.com/0085c2606940557e147a3c28f634f2e1/tumblr_p14y0xEos51t1yehoo1_1280.jpg',
//   true
// )
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     // JSON.parse does not evaluate the attacker's scripts.
//     var resp = JSON.parse(xhr.responseText)
//     console.log(resp)
//   }
// }
// xhr.send()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="https://facebook.github.io/react/img/logo.svg"
            className="App-logo"
            alt="logo"
          />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
