import React, { Component } from 'react'
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeNewBotModal, creatingNewBot } from '../redux/actions.js'

class BotForm extends Component {
  state = {
    name: '',
    trigger: '',
    response: '',
    avatar: ''
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

  handleAvatar = (e) => {
    this.setState({avatar: e.target.value})
  }

  formSubmit = () => {
    let payload = this.state
    this.props.creatingNewBot(payload)
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
          <Header>Avatar:</Header>
          <Form.Input
            placeholder='URL'
            onChange={this.handleAvatar}
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
    closeNewBotModal: () => {dispatch(closeNewBotModal())},
    creatingNewBot: (payload) => {dispatch(creatingNewBot(payload))}
  }
}

export default connect(null, mapDispatchToProps)(BotForm)
