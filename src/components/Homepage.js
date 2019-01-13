import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'
const Cookies = require('cookies-js')

class Homepage extends Component {
  render(){
  return Cookies.get('token') ? (
      <div>
        <Navbar setUser={this.props.setUser}/>
        <ConversationsContainer />
        <MessagesContainer />
      </div>
    ) : <Redirect to='/login' />
  }
}

export default Homepage
