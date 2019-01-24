import React, { Component } from 'react'
import { Menu, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout, openNewConversationModal, closeNewConversationModal, openNewBotModal, closeNewBotModal, openProfileModal, closeProfileModal, homepage } from '../redux/actions.js'
import NewConversation from './NewConversation'
import BotForm from './BotForm'
import Profile from './Profile'
import logo from './logo-pink.png'


class Navbar extends Component {

  render() {
    return (
      <Menu style={{backgroundColor: '#37525F', color: '#CEDEDC'}} inverted>
        <Menu.Item onClick={this.props.homepage}>
          <img src={logo} alt='logo'/>
        </Menu.Item>
        <Modal
          size='small'
          trigger={<Menu.Item
                      name='Create conversation'
                      onClick={this.props.openNewConversationModal}
                    />}
          open={this.props.conversationModal}
          onClose={this.props.closeNewConversationModal}
        >
          <Modal.Header> Create a New Conversation </Modal.Header>
          <NewConversation />
        </Modal>
        <Modal
          size='small'
          trigger={<Menu.Item
                      name='create bot'
                      onClick={this.props.openNewBotModal}/>}
          open={this.props.newBotModal}
          onClose={this.props.closeNewBotModal}
        >
          <Modal.Header> Create a New Bot </Modal.Header>
          <BotForm/>
        </Modal>
        <Menu.Menu position='right'>
        <Modal
          size='small'
          trigger={<Menu.Item
                      name='profile'
                      onClick={this.props.openProfileModal}
                      />}
          open={this.props.profileModal}
          onClose={this.props.closeProfileModal}
        >
        <Modal.Header> Profile </Modal.Header>
        <Profile/>
        </Modal>
          <Menu.Item
            name='logout'
            onClick={this.props.logout}
          />
        </ Menu.Menu>
      </Menu>
    )
  }

}

const mapStateToProps = state => {
  return {
    conversationModal: state.conversationModal,
    newBotModal: state.newBotModal,
    profileModal: state.profileModal,
    allBots: state.allBots,
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {dispatch(logout())},
    openNewConversationModal : () => {dispatch(openNewConversationModal())},
    closeNewConversationModal: () => {dispatch(closeNewConversationModal())},
    openNewBotModal: () => {dispatch(openNewBotModal())},
    closeNewBotModal: () => {dispatch(closeNewBotModal())},
    openProfileModal: () => {dispatch(openProfileModal())},
    closeProfileModal: () => {dispatch(closeProfileModal())},
    homepage: () => {dispatch(homepage())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
