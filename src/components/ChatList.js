import React, { Component } from 'react'
import Message from './Message'

class ChatList extends Component {
  // componentDidUpdate = () => {
  //   console.log(this.props)
  // }
  render () {
    const messages = this.props.messages.map((msg, i) => {
      return (
        <Message author={msg.author} text={msg.text} key={msg.timestamp} />
      )
    })
    return (
      <div className='chat-list'>
        {messages}
      </div>
    )
  }
}

export default ChatList
