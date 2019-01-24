import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Loading from './components/Loading'
import {Sticky} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import { connect } from 'react-redux'
import { createSocket, checkingForUser, loading } from './redux/actions.js'
const Cookies = require('cookies-js')


class App extends Component {

  componentDidMount() {
    if (Cookies.get('token')) {
      this.props.loading()
      this.props.checkingUser()
    }
  }

  render() {
    return (
      <Fragment>
      {this.props.loading ?
        (<Loading/>) : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path="/conversations" render={() => <Homepage />} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
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
    createSocket: () => {dispatch(createSocket())},
    checkingUser: (token) => {dispatch(checkingForUser(token))},
    loading: () => {dispatch(loading())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
