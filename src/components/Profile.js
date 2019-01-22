import React, { Component } from 'react'
import { Button, Header, Form, Modal, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { closeProfileModal } from '../redux/actions.js'


class Profile extends Component {
  // state = {
  //   name: this.props.userData.name,
  //   avatar: this.props.userData.avatar
  // }
  //
  // handleName = (e) => {
  //   this.setState({name: e.target.value})
  // }
  //
  // handleAvatar = (e) => {
  //   this.setState({avatar: e.target.value})
  // }
  //
  // formSubmit = (e) => {
  //   console.log(e)
  // }

// IF THERE'S ENOUGH TIME TO DO PATCH REQUEST
  // <Form onSubmit={this.formSubmit}>
  //   <Form.Input
  //     value={this.state.name}
  //     onChange={this.handleName}
  //     placeholder='Display name'
  //   />
    // <Header>Avatar:</Header>
    // <Form.Input
    //   value={this.state.avatar}
    //   placeholder='URL'
    //   onChange={this.handleAvatar}
    // />
    // <Button
  //     fluid
  //     size='small'
  //     content='Create'
  //     color='orange'
  //     onClick={this.props.closeProfileModal}
  //   />
  // </Form>


  render() {
    return(
      <Modal.Content image>
        <Image wrapped size='medium' src={this.props.userData.avatar}/>
        <Modal.Description>
          <Header>Display Name:</Header>
          <p>{this.props.userData.name}</p>
          <Header>Username:</Header>
          <p>{this.props.userData.username}</p>
        </Modal.Description>
      </Modal.Content>
    )
  }

}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeProfileModal: () => {dispatch(closeProfileModal())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
