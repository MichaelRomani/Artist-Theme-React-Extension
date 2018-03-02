import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import DrumTech from './drumTech'
import App from './App'
import $ from 'jquery'

$('#hplogo').replaceWith(`
<body >
<div id=hplogo  >
</div>
</body>
`)

$('#hplogo').after(`
<body >
<div style="width: 1000px;" id=main-div>
</div>
</body>
`)


$('.jsb').remove()

const beatButtons = document.getElementById('main-div')
const testApp = document.createElement('div')
testApp.id = 'root'
if (beatButtons) beatButtons.appendChild(testApp)
ReactDOM.render(<DrumTech />, document.getElementById('root'))

const mainLogo = document.getElementById('hplogo')
const app = document.createElement('div')
app.id = 'root2'
if (mainLogo) mainLogo.appendChild(app)
ReactDOM.render(<App />, document.getElementById('root2'))

//Element - seemingly occassional (holiday themed)
let addedElBelowSearch = document.getElementById('prm-pt')
if (addedElBelowSearch) addedElBelowSearch.remove()
