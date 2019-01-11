import React, { Component } from 'react'
import Search from './Search'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {

  render() {
    return (
      <Menu color={'red'}>
        <Menu.Item
          name='home'
          onClick={this.homeClick}/>
        <Menu.Item
          name='addBot'
          onClick={this.addBotClick}/>
      </Menu>
    )
  }

  homeClick = () => {
    console.log('clicking home')
  }

  addBotClick = () => {
    console.log('clicking add bot')
  }

}

export default Navbar
