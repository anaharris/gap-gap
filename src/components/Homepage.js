import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'

const Cookies = require('cookies-js')
class Homepage extends Component {

  render(){
  return (
    this.props.conversations ? (
      <Grid columns={2} padded >
        <Grid.Row>
          <ConversationsContainer
            conversations={this.props.conversations}
            onChatClick={this.props.onChatClick}
          />
          <MessagesContainer
            selectedChat={this.props.selectedChat}
            chatInput={this.props.chatInput}
          />
        </ Grid.Row>
      </Grid>
    ) : <Redirect to='/login' />
)
}
}

const mapStateToProps = state => {
  return {
    conversations: state.userData
  }
}

export default connect(mapStateToProps)(Homepage)
