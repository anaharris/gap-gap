import React, { Component } from 'react'
import Conversation from './Conversation'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createSocket } from '../redux/actions.js'

class ConversationContainer extends Component {

  componentDidMount() {
    this.props.createSocket()
  }

  render() {
    return (
      <Grid.Column width={4} >
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

const mapDispatchToProps = dispatch => {
  return {
    createSocket: () => {dispatch(createSocket())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
