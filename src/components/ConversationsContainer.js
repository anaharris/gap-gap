import React, { Component } from 'react'
import Conversation from './Conversation'
import { Segment, Grid } from 'semantic-ui-react'

class ConversationContainer extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Conversation />
        <Conversation />
      </Grid.Column>
    )
  }
}

export default ConversationContainer
