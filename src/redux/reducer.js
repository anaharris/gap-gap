import { combineReducers } from 'redux'

const messageReducer = (oldState = '', action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.messageInput
    default:
      return oldState
  }
}

const userReducer = (oldState = null, action) => {
  switch (action.type) {
    case 'FETCHED_USER':
      return action.userData
    default:
      return oldState
  }
}

const selectedConversationReducer = (oldState = null, action) => {
  switch (action.type) {
    case 'FETCHED_CONVERSATION':
      return action.selectedConversation
    default:
      return oldState
  }
}

const receiveMessageReducer = (oldState = null, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      let newMessages = this.state.selectedChat.messages.slice()
      newMessages.push(data)
      this.setState({
      selectedChat: { ...this.state.selectedChat, messages: newMessages }
    })
      return
      break;
    default:

  }
}

const rootReducer = combineReducers({
  messageInput: messageReducer,
  userData: userReducer,
  selectedConversation: selectedConversationReducer,
  receiveMessage: receiveMessageReducer
})

export default rootReducer
