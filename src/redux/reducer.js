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
      console.log('logging out')
      Cookies.expire('token')
      return null
    default:
      return state
  }
}

const selectedConversationReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCHED_CONVERSATION':
      return action.selectedConversation
    default:
      return state
  }
}

const receiveMessageReducer = (state = null, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      let newMessages = state.selectedConversation.messages.slice()
      newMessages.push(action.message)
      return {
        selectedConversation: { ...state.selectedConversation, messages: newMessages }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  messageInput: messageReducer,
  userData: userReducer,
  selectedConversation: selectedConversationReducer,
  receiveMessage: receiveMessageReducer,
})

export default rootReducer
