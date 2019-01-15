import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <p>{this.props.message.content}</p>
    )
  }
}

export default Message
