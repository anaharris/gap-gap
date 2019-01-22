import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Form, Button, Segment, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions.js'
const Cookies = require('cookies-js')

class Login extends Component {

  componentDidMount() {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1517200578024-62d131797ec8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80)"
    document.body.style.backgroundPosition= 'bottom'
    document.body.style.backgroundSsize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1508013861974-9f6347163ebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80)"
  }

  render() {
    return (
      Cookies.get('token') && this.props.currentUser ? <Redirect to='/conversations' /> :
      <div className='padded-top-large'>
        <Grid textAlign='center' verticalAlign='middle' style={{paddingTop: '15%'}}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'
              onSubmit={(e) => {this.props.onSubmit(e.target.username.value, e.target.password.value)}}>
              <Segment stacked style={ {backgroundColor: '#f9dcd6'}}>
                <Form.Input
                  name='username'
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  style={ {background: '#fcefec'}} />
                <Form.Input
                 name='password'
                 fluid
                 icon='lock'
                 iconPosition='left'
                 placeholder='Password'
                 type='password'
                 style={ {background: '#fcefec'}}
                 />
                <Button color='orange' fluid size='large' type='submit'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={ {backgroundColor: '#f9dcd6'}}>
                New to us? <Link to='/signup'>Sign up</Link>
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
