import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
    <div className='not-found' style={{height: '100vh', backgroundColor: '#F7C3B6'}}>
      <div className='not-found-text' style={{height: '100%', color: '#37525f', textAlign: 'center', verticalAlign: 'middle', paddingTop: '15%'}}>
        <p style={{fontSize: '40px',}}>
          Page not found!
        </p>
      </div>
      </div>
    )
  }
}

// add back button to this page
// <a href='' style={{fontSize: '20px', textDecoration: 'underline', color: '#37525f'}}>
//   Back
// </a>

export default NotFound
