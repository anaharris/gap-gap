import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import ActionCable from 'actioncable'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import {Sticky} from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { } from './redux/actions.js'
const Cookies = require('cookies-js')


class App extends Component {
  constructor() {
    super()
    this.state = {
      userData: null,
      conversations: [],
      selectedChat: null
    }
  }

  componentDidMount() {
    Cookies.get('token') && this.userFetch()
    this.createSocket()
  }

  setUser = (user) => {
    if (user == null) {
      this.setState({ userData: null, conversations: [], selectedChat: null })
    } else {
      this.setState({ userData: user, conversations: user.conversations})
    }

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

    const messagesSubscription = App.cable.subscriptions.create({channel: 'MessagesChannel', conversation_id: 1}, {
      connected: () => {
        console.log('connected to messages stream')
      },
      disconnected: () => {
        console.log('disconnected from messages stream')
      },
      received: (data) => {
        let newMessages = this.state.selectedChat.messages.slice()
        newMessages.push(data)
        this.setState({
          selectedChat: { ...this.state.selectedChat, messages: newMessages }
        })
      }
    })
    App.conversations = [messagesSubscription]
    window.App = App
  }

// action fetchingConversation
  onChatClick = (conversation) => {
    fetch(`http://localhost:5000/conversations/${conversation.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          selectedChat: data
        })
      })
  }

  chatInput = (e) => {
    if (e.keyCode === 13) {
      window.App.conversations[0].send({content: e.target.value, conversation_id: this.state.selectedChat.id})
    }
  }


  render() {
    const userData = this.props.currentUser
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
          <Route exact path="/conversations" render={() => <Homepage
              conversations={this.state.conversations}
              onChatClick={this.onChatClick}
              selectedChat={this.state.selectedChat}
              chatInput={this.chatInput}
            />}
          />
          <Route component={NotFound} />
        </Switch>
      </ Fragment>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchingUser: () => {dispatch(fetchingUser)},
//     fetchingConversation: (conversation) => {dispatch(fetchingConversation(conversation))},
//
//   }
// }

const mapStateToProps = state => {
  return {
    currentUser: state.userData
  }
}

export default withRouter(connect(mapStateToProps)(App));
// export default withRouter(App)
