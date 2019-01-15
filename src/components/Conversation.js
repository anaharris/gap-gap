import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class Conversation extends Component {
  render() {
    return (
      <Segment onClick={() => this.props.onChatClick(this.props.conversation)}>
          {this.props.conversation.topic}
      </Segment>
    )
  }
}

export default Conversation
