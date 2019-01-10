import React, { Component } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/home" component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
