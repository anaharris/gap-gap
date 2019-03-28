import React, { Component } from 'react'
import Message from './Message'
import Input from './Input'
import { Segment, Grid, List, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import welcome from './welcome.gif'

class MessagesContainer extends Component {
  render() {
    return (
      this.props.selectedConversation ?
      <Grid.Column width={8}>
        <Segment
          style={{
            height: '140%',
            overflowY: 'scroll'
          }} >
          <List>
            {this.props.selectedConversation.messages.map(m => (
              <Message key={m.id} message={m}/>
            ))}
          </List>
        </ Segment>
        <Segment>
          <Input />
        </Segment>
      </Grid.Column>
      :
      <Grid.Column width={8}>
        <Segment style ={{height: '120%'}}>
          <Image src={welcome} fluid/>
        </Segment>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedConversation: state.selectedConversation,
    currentUser: state.userData
  }
}

export default connect(mapStateToProps)(MessagesContainer)
