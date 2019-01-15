import React, { Component } from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  render() {
    return (
        <Form>
          <TextArea
            placeholder='start typing...' style={{ minHeight: 100 }}
            onKeyDown={(e) => this.props.chatInput(e)}
          />
        </ Form>
    )
  }
}

export default Input
