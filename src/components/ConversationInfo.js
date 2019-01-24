import React, { Component } from 'react'
import BotInfo from './BotInfo'
import { Segment, Grid, List, Image, Header, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ConversationInfo extends Component {

  filterBots(){
    if (this.props.selectedConversation) {
      debugger
      return this.props.allBots.filter(bot => !!this.props.selectedConversation.bots.includes(bot))
    } else {
      return this.props.allBots
    }
  }

  render() {
    return (
      this.props.selectedConversation ?
      <Grid.Column width={4}>
        <Segment>
          <List size='large' verticalAlign='middle'>
            <Header style={{color: '#37525F'}}>{this.props.selectedConversation.topic}</Header>
            <Header>Participants:</Header>
            {this.props.selectedConversation.users.map(user => {
              return (
                <List.Item key={user.id}>
                  <Image avatar src={user.avatar}/>
                  <List.Content>
                    <List.Header>{user.name}</List.Header>
                  </List.Content>
                </List.Item>
              )
            })}
            <Header>Bots:</Header>
            {this.props.selectedConversation.bots.map(bot => {
              return (
              <List.Item key={bot.id}>
                <Image avatar src={bot.avatar}/>
                <List.Content>
                  <List.Header>{bot.name}</List.Header>
                </List.Content>
              </List.Item>
            )})}
            </List>
            <Segment inverted style={{backgroundColor: '#37525F'}}>
            <Dropdown
              text='Add Bot'
              className='link item'
            >
              <Dropdown.Menu>
                {this.props.allBots.map(bot => {
                    return (<BotInfo key={bot.id} bot={bot}/>)
                  })}
              </Dropdown.Menu>
            </Dropdown>
          </Segment>
        </Segment>
      </Grid.Column> : null
    )
  }

}

const mapStateToProps = state => {
  return {
    selectedConversation: state.selectedConversation,
    allBots: state.allBots
  }
}

export default connect(mapStateToProps)(ConversationInfo)
