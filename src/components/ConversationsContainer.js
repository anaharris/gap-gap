import React, { Component } from 'react'
import Conversation from './Conversation'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingConversation } from '../redux/actions.js'

class ConversationContainer extends Component {

  render() {
    console.log(this.props.conversations)
    return (
      <Grid.Column width={4}>
      {this.props.conversations ?
        this.props.conversations.map(c => (
            <Conversation
              key={c.id}
              conversation={c}
              onClick={() => this.props.onClick(c.id)}
            />)) : null
        }
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    conversations: state.userData.user.conversations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {dispatch(fetchingConversation(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
