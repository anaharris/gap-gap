import React, { Component } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import ConversationInfo from './ConversationInfo'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingAllBots} from '../redux/actions.js'


class Homepage extends Component {

  componentDidMount() {
    this.props.fetchingAllBots()
  }

  render(){
  return (
    this.props.currentUser ? (
      <Grid columns={2} padded >
        <Grid.Row>
          <ConversationsContainer />
          <MessagesContainer />
          <ConversationInfo />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllBots: () => {dispatch(fetchingAllBots())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
