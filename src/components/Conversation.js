import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingConversation } from '../redux/actions.js'

class Conversation extends Component {
  render() {
    return (
      <Segment
        onClick={() => this.props.onClick(this.props.conversation.id)}
      >
          {this.props.conversation.topic}
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedConversation: state.selectedConversation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {dispatch(fetchingConversation(id))}
  }
}

export default connect(null, mapDispatchToProps)(Conversation)
