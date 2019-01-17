import React, { Component } from 'react'
import Message from './Message'
import Input from './Input'
import { Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MessagesContainer extends Component {
  render() {
    return (
      <Grid.Column width={12}>
      <Segment >
        {this.props.selectedConversation ?
          this.props.selectedConversation.messages.map(m => (
              <Message key={m.id} message={m}/>
            )) : <p>Select a conversation</p>}
        </ Segment>
        {this.props.selectedConversation ? (
          <Segment>
            <Input chatInput={this.props.chatInput}/>
          </Segment>
        ): null}
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedConversation: state.selectedConversation,
    chatInput: state.messageInput
  }
}

export default connect(mapStateToProps)(MessagesContainer)
