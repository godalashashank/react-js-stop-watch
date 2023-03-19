// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false}

  showPause = () => (
    <>
      <button onClick={this.stopTimer}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
          className="start-orstop"
        />
      </button>
      <p>Pause</p>
    </>
  )

  showStart = () => (
    <>
      <button onClick={this.startTimer}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
          className="start-orstop"
        />
      </button>
      <p>Start</p>
    </>
  )

  stopTimer = () => {
    clearInterval(this.interval)
    this.setState({isRunning: false})
  }

  startTimer = () => {
    this.interval = setInterval(this.timer, 1000)
    this.setState({isRunning: true})
  }

  timer = () => {
    const {minutes, seconds, isRunning} = this.state
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  resetTime = () => {
    clearInterval(this.interval)
    this.setState({minutes: 0, seconds: 0, isRunning: false})
  }

  render() {
    const {minutes, seconds, isRunning} = this.state
    const minutesToShow = Math.floor(seconds / 60)
    const secondsToShow = Math.floor(seconds % 60)
    const minutesNumber =
      minutesToShow > 9 ? minutesToShow : `0${minutesToShow}`
    const secondsNumber =
      secondsToShow > 9 ? secondsToShow : `0${secondsToShow}`

    return (
      <div className="bg-container">
        <h1>digital timer</h1>
        <p>
          {minutesNumber}:{secondsNumber}
        </p>
        {isRunning ? <p>Running</p> : <p>Paused</p>}
        <div className="controls-container">
          {this.showPause()}
          {this.showStart()}
          <button onClick={this.resetTime}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              className="start-orstop"
            />
          </button>
          <p>Reset</p>
        </div>
        <p>set timer limit</p>
      </div>
    )
  }
}

export default Stopwatch
