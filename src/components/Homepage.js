import React, { Component, Fragment } from 'react';
import MessagesContainer from './MessagesContainer'
import ConversationsContainer from './ConversationsContainer'
import ConversationInfo from './ConversationInfo'
import Navbar from './Navbar'
import { Redirect } from 'react-router-dom'
import { Grid, Sticky } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingAllBots, loaded } from '../redux/actions.js'


class Homepage extends Component {

  componentDidMount() {
    this.props.fetchingAllBots()
    this.props.loaded()
  }

  render(){
  return (
    this.props.currentUser ? (
      <div>
        <Fragment>
          <Sticky>
            <Navbar />
          </Sticky>
        </ Fragment>
        <Grid columns={2} padded >
          <Grid.Row>
            <ConversationsContainer />
            <MessagesContainer />
            <ConversationInfo />
          </ Grid.Row>
        </Grid>
      </div>
      ) : <Redirect to='/login' />
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userData,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllBots: () => {dispatch(fetchingAllBots())},
    loaded: () => {dispatch(loaded())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
