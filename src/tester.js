import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import TrackDrakeSamples from './trackSamples'
import TrackDrums from './trackDrums'
import { changeLogo, changePlayButtonImg, changeSong } from './store/store'
import logoImags from './logoImgs'

class Tester extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aKey: 'box pad-1',
      sKey: 'box pad-2',
      dKey: 'box pad-3',
      fKey: 'box pad-4',
      gKey: 'box pad-5',
      hKey: 'box pad-6',
      jKey: 'box pad-7',
      kKey: 'box pad-8',
      lKey: 'box pad-9',
      beatPlaying: false,
      showVideo: false
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.toggleBeatPlay = this.toggleBeatPlay.bind(this)
    this.showVideoToggle = this.showVideoToggle.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress, false)
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress, false)
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyPress(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    if (tempArr.length <= 9) {
      tempArr = tempArr.concat(' active')
      eval(`this.setState({ ${event.key}Key: tempArr })`)
    }
  }

  handleKeyUp(event) {
    let tempArr = eval(`this.state.${event.key}Key`)
    tempArr = tempArr.slice(0, 9)
    eval(`this.setState({ ${event.key}Key: tempArr })`)
  }

  showVideoToggle() {
    this.setState({ beatPlaying: false })
    this.setState({ showVideo: !this.state.showVideo })
    this.state.showVideo
      ? this.props.changeLogo(logoImags.google)
      : this.props.changeLogo(logoImags.howToVid)
  }

  toggleBeatPlay() {
    this.setState({ showVideo: false })
    this.props.changeLogo(logoImags.google)
    this.setState({ beatPlaying: !this.state.beatPlaying })
  }

  handleSongSelect(evt) {
    this.setState({ beatPlaying: false })
    this.props.changeSong(evt.target.value)
  }

  render() {
    return (
      <div className="a">
        <div>
          <div className="pad">
            <div className={this.state.aKey}>A</div>
            <div className={this.state.sKey}>S</div>
            <div className={this.state.dKey}>D</div>
            <div className={this.state.fKey}>F</div>
            <div className={this.state.gKey}>G</div>
            <div className={this.state.hKey}>H</div>
            <div className={this.state.jKey}>J</div>
            <div className={this.state.kKey}>K</div>
            <div className={this.state.lKey}>L</div>
          </div>
          <div id="button-holder">
            <img
              className="play-button"
              alt="play button"
              src={this.props.playButton}
              onClick={this.toggleBeatPlay}
            />

            <select onChange={this.handleSongSelect} className="video-button">
              <option>Choose Song</option>
              <option value="Dipset-Anthem">Dipset: Anthem</option>
              <option value="Drake-0-100">Drake: 0 - 100</option>
            </select>
            <button className="video-button" onClick={this.showVideoToggle}>
              {this.state.showVideo ? 'Close Tutorial' : 'Tutorial'}
            </button>
          </div>
          <div>
            {this.state.beatPlaying ? <TrackDrakeSamples /> : <div />}
            <TrackDrums beat={this.state.beatPlaying} />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    logo: state.googleLogo,
    playButton: state.playButton
  }
}

const mapDispatch = dispatch => {
  return {
    changeLogo: logo => dispatch(changeLogo(logo)),
    changePlayButtonImg: img => dispatch(changePlayButtonImg(img)),
    changeSong: song => dispatch(changeSong(song))
  }
}

export default connect(mapState, mapDispatch)(Tester)
