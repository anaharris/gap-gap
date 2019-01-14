import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import {Sticky} from 'semantic-ui-react'
const Cookies = require('cookies-js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    Cookies.get('token') && this.userFetch()
  }

  setUser = (user) => {
    this.setState({ userData: user })
  }

  userFetch = () => {
    const token = Cookies.get('token')
    const url = 'http://localhost:5000/profile'
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({userData: data.user}))
  }


  render() {
    const {userData} = this.state
    return (
      <Fragment>
      {userData ? (
        <Sticky>
          <Navbar setUser={this.setUser}/>
        </Sticky>
      ) : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/login'/>} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path="/home" render={() => <Homepage />} />
          <Route component={NotFound} />
        </Switch>
        </ Fragment>
    );
  }
}

export default withRouter(App);
