import React, { Component } from 'react'
import Conversation from './Conversation'
import { Grid } from 'semantic-ui-react'

class ConversationContainer extends Component {
  render() {
    return (
      <Grid.Column width={4}>
      {this.props.conversations ?
        this.props.conversations.map(c => (
            <Conversation key={c.id} conversation={c} onChatClick={this.props.onChatClick}/>)
          ) : null
        }
      </Grid.Column>
    )
  }
}

export default ConversationContainer
