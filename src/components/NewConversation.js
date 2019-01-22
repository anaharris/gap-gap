import React, { Component } from 'react'
import { Button, Header, Form, Modal, Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingAllUsers, creatingNewConversation } from '../redux/actions.js'

class NewConversation extends Component {

  state = {
    topic: '',
    userId: null
  }

  componentDidMount() {
    this.props.fetchingAllUsers()
  }

  inputChange = (e) => {
    this.setState({topic: e.target.value})
  }

  dropdownChange = (e) => {
    this.setState({userId: e.target.id})
  }

  buttonClick = () => {
    let data = {
      topic: this.state.topic,
      userId: this.state.userId
    }
    this.props.newConversation(data)
  }

  render() {
    let filteredUsers = this.props.allUsers.filter(user => user.id !== this.props.currentUser.id)
    console.log(filteredUsers)
    let allUsers = filteredUsers.map(user => {
      return {
        id: user.id,
        text: user.name,
        value: user.id,
        image: {avatar: true, src: user.avatar}
      }
    })

    return (
        <Modal.Content>
          <Header>Topic:</Header>
          <Form >
            <Form.Input onChange={this.inputChange}/>
            <Header>To:</Header>
            <Form.Input
              control={Select}
              placeholder='Select a person'
              fluid
              selection
              options={allUsers}
              onChange={this.dropdownChange}
            />
            <Button
              fluid
              size='small'
              content='Create'
              color='orange'
              onClick={this.buttonClick}
            />
          </Form>
        </Modal.Content>
    )
  }

}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    currentUser: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllUsers: () => {dispatch(fetchingAllUsers())},
    newConversation: (data) => {dispatch(creatingNewConversation(data))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewConversation)
