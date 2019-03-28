import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'


class Message extends Component {

  render() {
    return (
      <List.Item style={{marginBottom: '2px'}}>
        <Image avatar src={this.props.message.avatar}/>
        <List.Content>
          <List.Header>{this.props.message.user_name}</List.Header>
          <List.Description>
            {this.props.message.content}
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export default Message
