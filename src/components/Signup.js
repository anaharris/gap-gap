import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Form, Button, Segment, Message, Image, Header } from 'semantic-ui-react'
import logo from './signup-logo.png'
const Cookies = require('cookies-js')

class Signup extends Component {

  componentDidMount() {
    document.body.style.background = '#37525F'

  }

  render() {
    return (
      Cookies.get('token') && this.props.currentUser ? <Redirect to='/conversations' /> :
      <Grid columns={4} centered style={{paddingTop: '5%'}}>
        <Grid.Row verticalAlign='top'>
          <Grid.Column>
            <Image size='huge' floated='right' src={logo}/>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='bottom'>
        <Grid.Column >
            <Form
              size='large'
              onSubmit={(e) => {this.props.onSubmit(e.target.username.value, e.target.password.value)}}>
              <Segment stacked>
                <Form.Input
                  name='username'
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                 />
                 <Form.Input
                   name='name'
                   fluid icon='user outline'
                   iconPosition='left'
                   placeholder='Display name'
                  />
                 <Form.Input
                  name='avatar'
                  fluid
                  icon='photo'
                  iconPosition='left'
                  placeholder='Avatar URL'
                  />
                  <Form.Input
                   name='password'
                   fluid
                   icon='lock'
                   iconPosition='left'
                   placeholder='Password'
                   type='password'
                   />
                <Button
                  style={{backgroundColor: '#F7C3B6', color: '#37525F'}}
                  fluid
                  size='large'
                  type='submit'
                >Sign in</Button>
              </Segment>
            </Form>
            <Message style={{textAlign: 'center'}}>
                Already a member? <Link style={{color: '#37525F'}} to='/login'>Log in</Link>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Signup
