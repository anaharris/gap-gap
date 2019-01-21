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

const rootReducer = combineReducers({
  messageInput: messageReducer,
  userData: userReducer,
  selectedConversation: selectedConversationReducer
})

export default rootReducer
