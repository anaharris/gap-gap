import ActionCable from 'actioncable'
const Cookies = require('cookies-js')


// on Login
const fetchedUser = (userData) => ({type: 'FETCHED_USER', userData})

const fetchingUser = () => {
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
        dispatch(fetchedUser(userData))
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



export {fetchingUser, fetchingConversation, sendMessage, receiveMessage}
