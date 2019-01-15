import React, { Component } from 'react'

class Message extends Component {
  render() {
    return (
      <p>{this.props.message.user_id}: {this.props.message.content} </p>
    )
  }
}

export default Message
