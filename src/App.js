import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/home" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
