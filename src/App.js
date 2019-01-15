import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import {Sticky} from 'semantic-ui-react'
import ActionCable from 'actioncable'
const Cookies = require('cookies-js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      userData: null,
      conversations: []
    }
  }

  componentDidMount() {
    Cookies.get('token') && this.userFetch()
    this.createSocket()
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
      .then(data => {
        this.setState({userData: {
              id: data.user.id,
              avatar: data.user.avatar,
              name: data.user.name,
              username: data.user.username
            },
          conversations: data.user.conversations
        })
      })
  }

  createSocket = () => {
    const token = Cookies.get('token')
    const url = 'ws://localhost:5000/cable'
    let App = {}
    App.cable = ActionCable.createConsumer(`${url}?token=${token}`)
    // have a list of all the conversations that the user has
    // map/forEach over conversations and subscribe to each one
    // const conversations = [{id: 1, name: 'Good Dog of the Day'}]
    // const subscriptions = conversations.map(c => {
    //   return App.cable.subscriptions.create({channel: 'MessagesChannel', convo: c.id})
    // })
    const messagesSubscription = App.cable.subscriptions.create({channel: 'MessagesChannel', convo: 1}, {
      connected: () => {
        console.log('connected to messages stream')
      },
      disconnected: () => {
        console.log('disconnected from messages stream')
      },
      received: (data) => {
        console.log(data)
      }
    })
    App.conversations = [messagesSubscription]
    window.App = App
  }


  render() {
    console.log('rendering', this.state)
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
          <Route exact path="/home" render={() => <Homepage conversations={this.state.conversations}/>} />
          <Route component={NotFound} />
        </Switch>
        </ Fragment>
    );
  }
}

export default withRouter(App);
