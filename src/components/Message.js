import React, { Component } from 'react'
import { connect } from 'react-redux'

class Message extends Component {
  render () {
    return (
      <div
        className={`message ${this.props.author === this.props.userName ? 'from-me' : 'from-another'}`}
      >
        <h5 className='bp3-heading'>{this.props.author}</h5>
        <p className='bp3-running-text'>{this.props.text}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userName: state.userReducer.name
  }
}

export default connect(mapStateToProps)(Message)
