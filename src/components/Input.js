import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendingMessage } from '../redux/actions.js'

class Input extends Component {

  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (
        <Form>
          <TextArea
            placeholder='start typing...'
            style={{ minHeight: 100 }}
            onChange={this.onChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.props.chatInput(e.target.value)
              }
            }
          }
          />
        </ Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    chatInput: state.messageInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: (message) => {dispatch(sendingMessage(message))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input)
