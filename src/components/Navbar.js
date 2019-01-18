import React, { Component } from 'react'
import Search from './Search'
import { Menu } from 'semantic-ui-react'
import { logout } from '../redux/actions.js'
import { connect } from 'react-redux'

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
            onClick={this.props.logout}
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

}


export default connect(null, {logout})(Navbar)
