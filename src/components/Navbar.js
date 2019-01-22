import React, { Component } from 'react'
import { Menu, Dropdown, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions.js'
import NewConversation from './NewConversation'


class Navbar extends Component {

  render() {
    return (
      <Menu style={ {backgroundColor: '#cc5500'}} inverted>
        <Menu.Item>
          logo
        </Menu.Item>
        <Modal size='small' trigger={
          <Menu.Item
          name='new conversation'
        />
        }>
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
        <Menu.Item
          name='create bot'
          onClick={this.createBotClick}/>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {dispatch(logout())}
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
