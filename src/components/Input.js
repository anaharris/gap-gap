import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendingMessage } from '../redux/actions.js'

class Input extends Component {

  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
        <Form
          onSubmit={this.onSubmit}
          style={{backgroundColor: '#f9dcd6'}}
        >
          <Form.Input
            placeholder='start typing...'
            style={{ backgroundColor: '#fcefec' }}
            onChange={this.onChange}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.props.onKeyDown(e.target.value)
                this.setState({text:''})
              }
            }
          }
          value={this.state.text}
          />
        </ Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: (message) => {dispatch(sendingMessage(message))}
  }
}


export default connect(null, mapDispatchToProps)(Input)
