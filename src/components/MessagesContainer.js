import React, { Component } from 'react'
import Message from './Message'
import { Segment, Grid } from 'semantic-ui-react'

class MessagesContainer extends Component {
  render() {
    return (
      <Grid.Column width={12}>
        <Segment>
        {this.props.selectedChat ?
          this.props.selectedChat.messages.map(m => (
            <Message key={m.id} message={m}/>)
          ) : (<p>Select a conversation</p>)
        }
        </ Segment>
      </Grid.Column>
    )
  }
}

export default MessagesContainer
