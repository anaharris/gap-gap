import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class Conversation extends Component {
  render() {
    return (
      <Segment>
        {this.props.conversation.topic}
      </Segment>
    )
  }
}

export default Conversation
