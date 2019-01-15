import React, { Component } from 'react'
import Conversation from './Conversation'
import { Segment, Grid } from 'semantic-ui-react'

class ConversationContainer extends Component {
  render() {
    return (
      <Grid.Column width={4}>
      {this.props.conversations ?
        this.props.conversations.map(c => (<Conversation key={c.id} conversation={c}/>)) : null
        }
      </Grid.Column>
    )
  }
}

export default ConversationContainer
