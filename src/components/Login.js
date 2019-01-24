import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Form, Button, Segment, Message, Image, Header } from 'semantic-ui-react'
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
      Cookies.get('token') && this.props.currentUser && !this.props.loading ? <Redirect to='/conversations' /> :
      <div className='padded-top-large'>
        <Grid columns={4} centered style={{paddingTop: '10%'}}>
        <Grid.Row verticalAlign='top'>
          <Grid.Column>
            <Image size='small' floated='right' src={logo}/>
            <Header
              textAlign='center'
              style={{
                color: '#37525F',
                fontSize: '75px',
                fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}
              >
                GapGap
            </Header>
            <p style={{color: '#37525F', fontSize: '30px', textAlign: 'center', fontFamily: "'Open Sans', sans-serif"}}>Chat App</p>
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
              <Message style={{textAlign: 'center'}}>
                  New to us? <Link style={{color: '#37525F'}} to='/signup'>Sign up</Link>
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userData,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (username, password) => {dispatch(loggingIn(username, password))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
