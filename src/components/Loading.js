import React, { Component } from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import loading from './loading.gif'

class Loading extends Component {
  render() {
    return(
      this.props.loading ?
      (
        <Grid.Column width={3}>
          <Segment>
            <Image size='small' src={loading} fluid/>
          </Segment>
        </Grid.Column>
      ) : null
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
