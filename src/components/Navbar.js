import React, { Component } from 'react'
import Search from './Search'
import { Menu, Dropdown } from 'semantic-ui-react'
import { logout } from '../redux/actions.js'
import { connect } from 'react-redux'

class Navbar extends Component {

  render() {
    return (
      <Menu color={'green'} inverted>
        <Menu.Item
          name='new conversation'
          onClick={this.newClick}/>
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
          <Menu.Item>
            <Search />
          </ Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.props.logout}
          />
        </ Menu.Menu>
      </Menu>
    )
  }

  newClick = () => {
    console.log('clicking new')
  }

  addBotClick = () => {
    console.log('clicking add bot')
  }

  createBotClick = () => {
    console.log('clicking create bot')
  }

}


export default connect(null, {logout})(Navbar)
