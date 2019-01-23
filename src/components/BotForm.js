import React, { Component } from 'react'
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeNewBotModal } from '../redux/actions.js'

class BotForm extends Component {
  state = {
    name: '',
    trigger: '',
    response: ''
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
  }

  handleTrigger = (e) => {
    this.setState({trigger: e.target.value})
  }

  handleResponse = (e) => {
    this.setState({response: e.target.value})
  }

  formSubmit = () => {
    this.props.closeNewBotModal()
  }

  render() {
    return (
      <Modal.Content>
        <Header>Bot name:</Header>
        <Form onSubmit={this.formSubmit}>
          <Form.Input
            placeholder='Bot name'
            onChange={this.handleName}
          />
          <Header>Trigger:</Header>
          <p>Trigger should be a single word.</p>
          <Form.Input
            placeholder='Trigger'
            onChange={this.handleTrigger}
          />
          <Header>Response:</Header>
          <p>Response can be a word or a sentence.</p>
          <Form.Input
            placeholder='Response'
            onChange={this.handleResponse}
          />
          <Button
            fluid
            size='small'
            content='Create'
            color='orange'
          />
        </Form>
      </Modal.Content>
    )
  }

}


const mapDispatchToProps = dispatch => {
  return {
    closeNewBotModal: () => {dispatch(closeNewBotModal())}
  }
}

export default connect(null, mapDispatchToProps)(BotForm)
