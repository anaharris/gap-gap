import ActionCable from 'actioncable'
const Cookies = require('cookies-js')

// login
const loggedIn = (userData) => ({type: 'LOGGED_IN', userData})

const loggingIn = (username, password) => {
  return (dispatch) => {
    const url = 'http://localhost:5000/login'
  let data = { user: {username: username, password: password} }
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.message)
      } else {
        Cookies.set('token', data.jwt)
        dispatch(loggedIn(data.user))
        console.log('loggingIn', data)
      }
    })
  }
}

// logout
const logout = () => ({type: 'LOGGED_OUT'})


// fetch user
const checkedUser = (userData) => ({type: 'CHECKED_USER', userData})

const checkingForUser = (token) => {
  return (dispatch) => {
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
      .then(userData => {
        dispatch(checkedUser(userData))
        console.log('checkingUser', userData)
      })
  }
}


// on componentDidMount
const receiveMessage = (message) => ({type: 'RECEIVE_MESSAGE', message})

const createSocket = () => {
  return (dispatch) => {
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
        dispatch(receiveMessage(data))
      }
    })
      console.log('socket')
      App.conversations = [messagesSubscription]
      window.App = App
  }
}

// onClick on a particular conversation
const fetchedConversation = (selectedConversation) => ({type: 'FETCHED_CONVERSATION', selectedConversation})

const fetchingConversation = (conversation) => {
  return (dispatch) => {
    fetch(`http://localhost:5000/conversations/${conversation.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchedConversation(data))
      })
  }
}

// onKeyDown for Conversation Input
const sendMessage = (message) => ({type: 'SEND_MESSAGE', messageInput: message})

const sendingMessage = (message) => {
  return (dispatch) => {
    window.App.conversations[0].send({content: message, conversation_id: this.state.selectedChat.id})
    dispatch(sendMessage(message))
  }
}



export { sendingMessage, fetchingConversation, receiveMessage, checkingForUser, loggingIn, logout, createSocket }
