import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import Navbar from './Navbar'


class Homepage extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <ConversationsContainer />
        <MessagesContainer />
      </div>
    )
  }
}

export default Homepage
