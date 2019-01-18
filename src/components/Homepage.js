import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'


class Homepage extends Component {

  render(){
  return (
    this.props.currentUser ? (
      <Grid columns={2} padded >
        <Grid.Row>
          <ConversationsContainer />
          <MessagesContainer />
        </ Grid.Row>
      </Grid>
      ) : <Redirect to='/login' />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userData
  }
}


export default connect(mapStateToProps)(Homepage)
