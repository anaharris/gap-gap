const Cookies = require('cookies-js')

const fetchingUser = () => {
  return () => {
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
      .then(data => dispatch(fetchedUser(userData)))
  }
}

const fetchedUser = (userData) => {type: 'FETCHED_USER', userData}

const createSocket = () => {
  return () => {
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
      received: (data) => dispatch(receiveMessage(data)))

      App.conversations = [messagesSubscription]
      window.App = App
  }
}

const receiveMessage = (message) => ({type: 'RECEIVE_MESSAGE', message})

const fetchingConversation = (conversation) => {
  return () => {
    fetch(`http://localhost:5000/conversations/${conversation.id}`)
      .then(res => res.json())
      .then(data => dispatch(fetchedConversation(data)))
  }
}

const fetchedConversation = (selectedConversation) => ({type: 'FETCHED_CONVERSATION', selectedConversation})

const sendMessage = (message) => ({type: 'SEND_MESSAGE', messageInput: message})



export {fetchingUser, fetchingConversations, sendMessage, receiveMessage}
