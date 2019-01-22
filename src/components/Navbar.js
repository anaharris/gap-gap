import React, { Component } from 'react'
import { Menu, Dropdown, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout, openNewConversationModal, closeNewConversationModal } from '../redux/actions.js'
import NewConversation from './NewConversation'


class Navbar extends Component {

  render() {
    return (
      <Menu style={ {backgroundColor: '#cc5500'}} inverted>
        <Menu.Item>
          logo
        </Menu.Item>
        <Modal
          size='small'
          trigger={<Menu.Item
                      name='new conversation'
                      onClick={this.props.openNewConversationModal}
                    />}
          open={this.props.conversationModal}
          onClose={this.props.closeNewConversationModal}
        >
          <Modal.Header> New Conversation </Modal.Header>
          <NewConversation />
        </Modal>
        <Dropdown text='Bots' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Current Weather</Dropdown.Item>
            <Dropdown.Item>Shiba Pictures</Dropdown.Item>
            <Dropdown.Item>Cat Facts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Modal
          size='small'
          trigger={<Menu.Item
                      name='create bot'
                      onClick={this.createBotClick}/>}
          open={this.props.addBot}
        >
        </Modal>
        <Menu.Menu position='right'>
          <Menu.Item
            name='profile'
            onClick={this.profileClick}
          />
          <Menu.Item
            name='logout'
            onClick={this.props.logout}
          />
        </ Menu.Menu>
      </Menu>
    )
  }

  addBotClick = () => {
    console.log('clicking add bot')
  }

  createBotClick = () => {
    console.log('clicking create bot')
  }

  profileClick = () => {
    console.log('clicking profile')
  }

}

const mapStateToProps = state => {
  return {
    conversationModal: state.conversationModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {dispatch(logout())},
    openNewConversationModal : () => {dispatch(openNewConversationModal())},
    closeNewConversationModal: () => {dispatch(closeNewConversationModal())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
