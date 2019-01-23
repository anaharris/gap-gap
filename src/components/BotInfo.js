import React, { Component } from 'react'
import { Dropdown, Modal, Image, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class BotInfo extends Component {

    state = {
      open: false
    }

    onButtonClick = () => {
      this.setState({open: false})
    }

  render() {
    return (
      <Modal
        size='small'
        open={this.state.open}
        trigger={
          <Dropdown.Item
            onClick={() => this.setState({open: true})}>
            {this.props.bot.name}
          </Dropdown.Item>
        }>
          <Modal.Header>{this.props.bot.name}</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src={this.props.bot.avatar}
            />
            <Modal.Description>
              <Header>Trigger:</Header>
              <p>/{this.props.bot.trigger}</p>
              <Header>Response:</Header>
              <p>{this.props.bot.response}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='orange'
              onClick={() => this.setState({open: false})}
              size='small'
            > Cancel </Button>
            <Button
              color='green'
              onClick={this.onButtonClick}
              size='small'
            > Add </Button>
          </Modal.Actions>
      </Modal>
    )
  }
}


export default connect()(BotInfo)
