import React, { Component } from 'react'
import Conversation from './Conversation'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ConversationContainer extends Component {

  render() {
    return (
      <Grid.Column width={4}>
      {this.props.conversations ?
        this.props.conversations.map(c => (
            <Conversation
              key={c.id}
              conversation={c}
            />)) : null
        }
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    conversations: state.userData.conversations
  }
}

export default connect(mapStateToProps)(ConversationContainer)
