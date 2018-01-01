// /*global chrome*/
// import React, { Component } from 'react'
// import './App.css'
// import TrackSamples from './trackSamples'
// import TrackDrums from './trackDrums'
// import $ from 'jquery'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       aKey: false
//     }
//     this.handleKeyPress = this.handleKeyPress.bind(this)
//     this.handleKeyUp = this.handleKeyUp.bind(this)
//   }
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyPress, false)
//     window.addEventListener('keyup', this.handleKeyUp, false)
//   }

//   handleKeyPress(event) {
//     if (event.key === event.key && this.state.aKey === false) {
//       eval(`this.setState({ ${event.key}Key: true })`)
//       console.log('here1', this.state.aKey)
//     }
//   }

//   handleKeyUp(event) {
//     if (event.key === 'a' && this.state.aKey === true) {
//       this.setState({ aKey: false })
//     }
//   }

//   render() {
//     return (
//       <div className="a">
//         <div>
//           <h1>DRUM PAD</h1>
//           <div className="pad">
//             {this.state.aKey ? (
//               <div
//                 style={{
//                   width: '100px',
//                   height: '100px',
//                   margin: '10px 0',
//                   boxShadow: '0 8px 6px -6px black',
//                   backgroundColor: 'orange',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   fontSize: '20px',
//                   color: 'white',
//                   userSelect: 'none'
//                 }}
//                 data-code="82"
//               >
//                 A
//               </div>
//             ) : (
//               <div
//                 style={{
//                   width: '100px',
//                   height: '100px',
//                   margin: '10px 0',
//                   boxShadow: '0 8px 6px -6px black',
//                   backgroundColor: 'green',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   fontSize: '29px',
//                   color: 'black',
//                   userSelect: 'none'
//                 }}
//                 data-code="82"
//               >
//                 A
//               </div>
//             )}
//             <div className="box pad-2" data-code="84">
//               S
//             </div>
//             <div className="box pad-3" data-code="89">
//               D
//             </div>
//             <div className="box pad-4" data-code="85">
//               F
//             </div>
//             <div className="box pad-5" data-code="70">
//               G
//             </div>
//             <div className="box pad-6" data-code="71">
//               H
//             </div>
//             <div className="box pad-7" data-code="72">
//               J
//             </div>
//             <div className="box pad-8" data-code="74">
//               K
//             </div>
//           </div>
//           <div>
//             <TrackSamples />
//             <TrackDrums />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App

// // let recordImg = document.getElementById('record-img')
// // let out = false
// // $(document).on('click', '#album', function() {
// //   if (!out) {
// //     recordImg.style = `
// //   position: absolute;
// //   margin-left: 47%;
// //   margin-right: auto;
// //   left: 0;
// //   right: 0;
// //   height:200px;
// //    z-index: 1;
// //    `
// //     out = true
// //   } else if (out) {
// //     recordImg.style = `
// //   position: absolute;
// //   margin-left: auto;
// //   margin-right: auto;
// //   left: 0;
// //   right: 0;
// //   height:200px;
// //    z-index: 1;
// //    `
// //     out = false
// //   }
// // })
