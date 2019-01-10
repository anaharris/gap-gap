import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'

class Homepage extends Component {
  render(){
    return(
      <div>
        <ConversationsContainer />
        <MessagesContainer />
      </div>
    )
  }
}

export default Homepage
