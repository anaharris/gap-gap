import { combineReducers } from 'redux'
const Cookies = require('cookies-js')


const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.messageInput
    default:
      return state
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.userData
    case 'LOGGED_OUT':
      Cookies.expire('token')
      return null
    case 'CHECKED_USER':
      return action.userData
    case 'NEW_CONVERSATION':
      console.log(action)
      let newConversations = state.conversations.slice()
      newConversations.push(action.conversation)
      return {...state, conversations: newConversations}
    default:
      return state
  }
}

const selectedConversationReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCHED_CONVERSATION':
      return action.selectedConversation
    case 'RECEIVE_MESSAGE':
      let newMessages = state.messages.slice()
      newMessages.push(action.message)
      return {...state, messages: newMessages}
    default:
      return state
  }
}

const allUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_ALL_USERS':
      return action.allUsers
    default:
      return state
  }
}

const conversationModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_NEW_CONVERSATION':
      return true
    case 'CLOSE_NEW_CONVERSATION':
      return false
    default:
      return state
  }
}

const botModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_NEW_BOT':
      return true
    case 'CLOSE_NEW_BOT':
      return false
    default:
      return state
  }
}


const profileModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_PROFILE_MODAL':
      return true
    case ('CLOSE_PROFILE_MODAL'):
      return false
    default:
      return state
  }
}

const allBotsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCHED_ALL_BOTS':
      return action.bots
    case 'CREATED_NEW_BOT':
      return [...state, action.bot]
    default:
      return state
  }
}


const rootReducer = combineReducers({
  messageInput: messageReducer,
  userData: userReducer,
  selectedConversation: selectedConversationReducer,
  allUsers: allUsersReducer,
  allBots: allBotsReducer,
  conversationModal: conversationModalReducer,
  newBotModal: botModalReducer,
  profileModal: profileModalReducer
})

export default rootReducer
