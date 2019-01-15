import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
const Cookies = require('cookies-js')

class Homepage extends Component {

  render(){
  return Cookies.get('token') ? (
      <Grid columns={2} padded >
        <Grid.Row>
          <ConversationsContainer
            conversations={this.props.conversations}
            onChatClick={this.props.onChatClick}
          />
          <MessagesContainer selectedChat={this.props.selectedChat} />
        </ Grid.Row>
      </Grid>
    ) : <Redirect to='/login' />
  }

}

export default Homepage
