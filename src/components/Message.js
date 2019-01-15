import React, { Component } from 'react'

class Message extends Component {

  render() {
    return (
      <p><span className='conv-name'>{this.props.message.user_name}:</span> {this.props.message.content} </p>
    )
  }
}

export default Message
