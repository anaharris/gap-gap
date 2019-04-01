import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import withLoader from './components/withLoader'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import {Sticky} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import { connect } from 'react-redux'
import { createSocket, checkingForUser } from './redux/actions.js'
const Cookies = require('cookies-js')


class App extends Component {

  componentDidMount() {
    if (Cookies.get('token')) {
      this.props.checkingUser()
    }
  }

  render() {
    return (
      <Fragment>
      {this.props.currentUser ? (
        <Sticky>
          <Navbar />
        </Sticky>
      ) : null}
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} render={() => <Redirect to='/login'/>} />
          <Route exact path={process.env.PUBLIC_URL + "/login"} render={() => <Login />} />
          <Route exact path={process.env.PUBLIC_URL + "/signup"} component={Signup} />
          <Route exact path={process.env.PUBLIC_URL + "/conversations"} render={() => <Homepage />} />
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

export default withLoader(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
