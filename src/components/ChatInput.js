import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'

class ChatInput extends Component {
  state = {
    messageText: ''
  }
  handleSend = () => {
    if (this.state.messageText.length > 0) {
      this.props.onAddNewMessage(this.state.messageText)
      this.setState({ messageText: '' })
    }
  }
  handleType = e => {
    this.setState({ messageText: e.target.value })
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSend()
    }
  }
  render () {
    return (
      <div className='chat-input'>
        <input
          type='text'
          className='bp3-input'
          placeholder='Enter your message...'
          value={this.state.messageText}
          onChange={this.handleType}
          onKeyPress={this.handleKeyPress}
        />
        <Button
          minimal='true'
          icon='chat'
          intent='primary'
          large='true'
          onClick={this.handleSend}
        />
      </div>
    )
  }
}

export default ChatInput
