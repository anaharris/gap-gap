import ActionCable from 'actioncable'
import store from './store.js'
const Cookies = require('cookies-js')
const API_URL = 'https://gap-gap.herokuapp.com'
// login
const loggedIn = (userData) => ({type: 'LOGGED_IN', userData})

const loggingIn = (username, password) => {
  return (dispatch) => {
    const url = `${API_URL}/login`
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
    const url =  `${API_URL}/profile`
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch(checkedUser(data.user))
      })
  }
}


// on componentDidMount
const receiveMessage = (message) => ({type: 'RECEIVE_MESSAGE', message})

const createSocket = () => {
  return (dispatch) => {
    const token = Cookies.get('token')
    const url = `ws:${API_URL}/cable`
    let App = {}
    App.cable = ActionCable.createConsumer(`${url}?token=${token}`)

    const messagesSubscription = App.cable.subscriptions.create({channel: 'MessagesChannel', conversation_id: store.getState().selectedConversation}, {
      connected: () => {
        console.log('connected to messages stream')
      },
      disconnected: () => {
        console.log('disconnected from messages stream')
      },
      received: (data) => {
        // check data object
        // if it has data.content it's a message
        // if it doesn't it's a "{username} is typing (could be stored in data.status)"
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

const fetchingConversation = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/conversations/${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchedConversation(data))
      })
  }
}

const homepage = () => ({type: 'HOMEPAGE'})

// onKeyDown for Conversation Input
const sendMessage = (message) => ({type: 'SEND_MESSAGE', messageInput: message})

const sendingMessage = (message) => {
  return (dispatch) => {
    window.App.conversations[0].send({content: message, conversation_id: store.getState().selectedConversation.id})
    dispatch(sendMessage(message))
  }
}

// fetch all users
const fetchedAllUsers = (allUsers) => ({type: 'FETCHED_ALL_USERS', allUsers})

const fetchingAllUsers = () => {
  return (dispatch) => {
    const token = Cookies.get('token')
    const url = `${API_URL}/users`
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(fetchedAllUsers(data))
      })
  }
}

// create new conversation
const openNewConversationModal = () => ({type: 'OPEN_NEW_CONVERSATION'})

const closeNewConversationModal = () => ({type: 'CLOSE_NEW_CONVERSATION'})

const createdNewConversation = (conversation) => ({type: 'NEW_CONVERSATION', conversation})

const creatingNewConversation = (payload) => {
  return (dispatch) => {
    const token = Cookies.get('token')
    fetch(`${API_URL}/conversations`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization":`Bearer ${token}`
      },
      body: JSON.stringify({topic: payload.topic})
    })
      .then(res => res.json())
      .then(conversationData => {
        fetch(`${API_URL}/user_conversations`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":`Bearer ${token}`
          },
          body: JSON.stringify({conversation_id: conversationData.conversation.id, user_id: parseInt(payload.userId)})
        }).then(res => res.json())
          .then(resData => {
            fetch(`${API_URL}/user_conversations`, {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization":`Bearer ${token}`
              },
              body: JSON.stringify({conversation_id: resData.userConversation.conversation_id, user_id: store.getState().userData.id})
            }).then(res => res.json())
              .then(data => {
                console.log(conversationData)
                dispatch(createdNewConversation(conversationData.conversation))
              })
          })
        })
  }
}

// fetching all bots
const fetchedAllBots = (bots) => ({type: 'FETCHED_ALL_BOTS', bots})

const fetchingAllBots = () => {
  return(dispatch) => {
    const token = Cookies.get('token')
    fetch(`${API_URL}/bots`, {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`}
    }).then(res => res.json())
      .then(data => {dispatch(fetchedAllBots(data))})
  }
}

// add bot to conversation
const addedBot = (bot) => ({type: 'ADDED_BOT_TO_CONVERSATION', bot})

const addingBot = (payload) => {
  return(dispatch) => {
    const token = Cookies.get('token')
    fetch(`${API_URL}/bot_conversations`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(data => {
        fetch(`${API_URL}/bots/${data.botConversation.bot_id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
          }
        }).then(res => res.json())
          .then(data => {dispatch(addedBot(data))})
      }
    )}
  }


// create new bot
const openNewBotModal = () => ({type: 'OPEN_NEW_BOT'})

const closeNewBotModal = () => ({type: 'CLOSE_NEW_BOT'})

const createdNewBot = (bot) => ({type: 'CREATED_NEW_BOT', bot})

const creatingNewBot = (payload) => {
  return(dispatch) => {
    const token = Cookies.get('token')
    fetch(`${API_URL}/bots`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization":`Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(data => dispatch(createdNewBot(data.bot)))
  }
}

// edit profile
const openProfileModal = () => ({type: 'OPEN_PROFILE_MODAL'})

const closeProfileModal = () => ({type: 'CLOSE_PROFILE_MODAL'})

// const sendStatus = (message) => ({type: 'SEND_STATUS', messageInput: message})
//
// const sendingStatus = (message) => {
//   // format the status message
//   return (dispatch) => {
//     window.App.conversations[0].send({status: message, conversation_id: store.getState().selectedConversation.id})
//     dispatch(sendMessage(message))
//   }
// }

export { sendingMessage, fetchingConversation, receiveMessage, checkingForUser, loggingIn, logout, createSocket, fetchingAllUsers, creatingNewConversation, openNewConversationModal, closeNewConversationModal, closeNewBotModal, openNewBotModal, openProfileModal, closeProfileModal, fetchingAllBots, creatingNewBot, addingBot, homepage }
