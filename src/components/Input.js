import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendMessage } from '../redux/actions.js'

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
            onKeyDown={(e) => this.props.chatInput(e)}
          />
        </ Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: (message) => {dispatch(sendMessage(message))}
  }
}


export default connect(null, mapDispatchToProps)(Input)
