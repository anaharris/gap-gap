import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Form, Button, Segment, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions.js'
const Cookies = require('cookies-js')

class Login extends Component {
  render() {
    // Cookies.expire('token')
    console.log('token', Cookies.get('token'))
    return (
      Cookies.get('token') ? <Redirect to='/conversations' /> :
      <div className='padded-top-large'>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={(e) => {
                    this.props.onSubmit(e.target.username.value, e.target.password.value)
              }}>
              <Segment stacked>
                <Form.Input name='username' fluid icon='user' iconPosition='left' placeholder='Username' />
                <Form.Input
                 name='password'
                 fluid
                 icon='lock'
                 iconPosition='left'
                 placeholder='Password'
                 type='password'
                 />
                <Button color='green' fluid size='large' type='submit'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
                New to us? <Link to='/signup'>Sign up</Link>
            </Message>
          </ Grid.Column>
        </Grid>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (username, password) => {dispatch(loggingIn(username, password))}
  }
}


export default connect(null, mapDispatchToProps)(Login)
