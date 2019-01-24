import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Form, Button, Segment, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions.js'
import logo from './logo-blue.png'
const Cookies = require('cookies-js')


class Login extends Component {

  componentDidMount() {
    document.body.style.background = '#F7C3B6'

  }

  render() {
    return (
      Cookies.get('token') && this.props.currentUser ? <Redirect to='/conversations' /> :
      <div className='padded-top-large'>
        <Grid textAlign='center' verticalAlign='middle' style={{paddingTop: '15%'}}>
          <Grid.Column style={{ maxWidth: 450 }}>
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
                 name='password'
                 fluid
                 icon='lock'
                 iconPosition='left'
                 placeholder='Password'
                 type='password'
                 style={{background: '#fcefec'}}
                 />
                <Button
                  style={{backgroundColor: '#37525F', color: '#CEDEDC'}}
                  fluid
                  size='large'
                  type='submit'
                >Login</Button>
              </Segment>
            </Form>
            <Message inverted>
                New to us? <Link style={{color: '#37525F'}} to='/signup'>Sign up</Link>
            </Message>
          </ Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (username, password) => {dispatch(loggingIn(username, password))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
