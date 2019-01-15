import React, { Component } from 'react'
import Search from './Search'
import { Menu } from 'semantic-ui-react'
const Cookies = require('cookies-js')

class Navbar extends Component {

  render() {
    return (
      <Menu color={'green'} inverted>
        <Menu.Item
          name='home'
          onClick={this.homeClick}/>
        <Menu.Item
          name='add bot'
          onClick={this.addBotClick}/>
        <Menu.Item
          name='create bot'
          onClick={this.createBotClick}/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Search />
          </ Menu.Item>
          <Menu.Item
            name='logout'
            onClick={this.handleLogout}
          />
        </ Menu.Menu>
      </Menu>
    )
  }

  homeClick = () => {
    console.log('clicking home')
  }

  addBotClick = () => {
    console.log('clicking add bot')
  }

  createBotClick = () => {
    console.log('clicking create bot')
  }

  handleLogout = () => {
    Cookies.expire('token')
    this.props.setUser(null)
  }

}

export default Navbar