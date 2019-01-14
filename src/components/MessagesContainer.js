import React, { Component } from 'react'
import Message from './Message'
import { Segment, Grid } from 'semantic-ui-react'

class MessagesContainer extends Component {
  render() {
    return (
      <Grid.Column width={12}>
        <Segment>
          <Message />
          <Message />
        </ Segment>
      </Grid.Column>
    )
  }
}

export default MessagesContainer
