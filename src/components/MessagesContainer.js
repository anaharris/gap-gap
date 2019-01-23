import React, { Component } from 'react'
import Message from './Message'
import Input from './Input'
import { Segment, Grid, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MessagesContainer extends Component {
  render() {
    return (
      this.props.selectedConversation ?
      <Grid.Column width={12}>
        <Segment
          style={{
            backgroundColor: '#f9dcd6',
            height: '550px',
            overflow: 'scroll'
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
      </Grid.Column> : <p id='greeting'>hi, {this.props.currentUser.name}</p>
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
