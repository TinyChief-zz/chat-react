import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatList from './ChatList'
import ChatInput from './ChatInput'
import { addNewMessage } from '../actions/chatActions'

class ChatRoom extends Component {
  render () {
    // console.log(this.state.messages)
    return (
      <div className='chat-window'>
        {this.props.messages.length}
        <ChatList messages={this.props.messages} />
        <ChatInput onAddNewMessage={this.props.onAddNewMessage} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddNewMessage: msg => {
      dispatch(addNewMessage(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
