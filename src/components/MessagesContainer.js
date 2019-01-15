import React, { Component } from 'react'
import Message from './Message'
import Input from './Input'
import { Segment, Grid } from 'semantic-ui-react'

class MessagesContainer extends Component {
  render() {
    return (
      <Grid.Column width={12}>
      <Segment >
        {this.props.selectedChat ?
          this.props.selectedChat.messages.map(m => (
              <Message key={m.id} message={m}/>
            )) : null}
        </ Segment>
        {this.props.selectedChat ? (
          <Segment>
            <Input chatInput={this.props.chatInput}/>
          </Segment>
        ): null}
      </Grid.Column>
    )
  }
}

export default MessagesContainer
