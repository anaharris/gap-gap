import React, { Component } from 'react'
import { Button, Modal, Header, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeNewBotModal } from '../redux/actions.js'

class BotForm extends Component {

  render() {
    return (
      <Modal.Content>
        <Header>Bot name:</Header>
        <Form>
          <Form.Input
            placeholder='Bot name'
          />
          <Header>Trigger:</Header>
          <p>Trigger should be a single word.</p>
          <Form.Input/>
          <Header>Response:</Header>
          <p>Response can be a word or a sentence.</p>
          <Form.Input/>
          <Button
            fluid
            size='small'
            content='Create'
            color='orange'
            onClick={this.props.closeNewBotModal}
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
