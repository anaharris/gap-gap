import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import {Sticky} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createSocket, checkingForUser } from './redux/actions.js'
const Cookies = require('cookies-js')


class App extends Component {

  componentDidMount() {
    if (Cookies.get('token')) {
      this.props.checkingUser()
      console.log('componentDidMount in App')
    }
  }

  render() {
    console.log('currentUser in App', this.props.currentUser)
    return (
      <Fragment>
      {this.props.currentUser ? (
        <Sticky>
          <Navbar />
        </Sticky>
      ) : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path="/conversations" render={() => <Homepage />} />
          <Route component={NotFound} />
        </Switch>
      </ Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSocket: () => {dispatch(createSocket())},
    checkingUser: (token) => {dispatch(checkingForUser(token))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
