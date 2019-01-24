import React, { Component } from 'react'
import { Button, Header, Form, Modal, Select } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingAllUsers, creatingNewConversation, closeNewConversationModal } from '../redux/actions.js'

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

  formSubmit = () => {
    let data = {
      topic: this.state.topic,
      userId: this.state.userId
    }
    console.log(data)
    this.props.creatingNewConversation(data)
    this.props.closeNewConversationModal()
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
          <Form id="newConversationForm" onSubmit={this.formSubmit}>
            <Form.Input
              onChange={this.inputChange}
              placeholder='Topic'
            />
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
              style={{backgroundColor: '#37525F', color: '#CEDEDC'}}
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
    creatingNewConversation: (data) => {dispatch(creatingNewConversation(data))},
    closeNewConversationModal: () => {dispatch(closeNewConversationModal())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewConversation)
