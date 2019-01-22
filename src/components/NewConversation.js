import React, { Component } from 'react'
import { Button, Header, Form, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingAllUsers } from '../redux/actions.js'

class NewConversation extends Component {

  componentDidMount() {
    this.props.fetchingAllUsers()
  }

  render() {

    let filteredUsers = this.props.allUsers.filter(user => user.id !== this.props.currentUser.id)
    let allUsers = filteredUsers.map(user => {
      return {
        text: user.name,
        value: user.id,
        image: {avatar: true, src: user.avatar}
      }
    })

    return (
        <Modal.Content>
          <Header>Topic:</Header>
          <Form onSubmit={(e, data) => console.log(e, data)}>
            <Form.Input />
            <Header>To:</Header>
            <Form.Dropdown placeholder='Select a person' fluid selection options={allUsers} />
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

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    currentUser: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingAllUsers: () => {dispatch(fetchingAllUsers())}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewConversation)
