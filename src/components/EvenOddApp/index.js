import {Component} from 'react'

import './index.css'

class Count extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const random = this.getRandom()

    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const displayNum = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {displayNum}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase by Random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default Count
