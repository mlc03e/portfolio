import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <div className='resume'>
        <img src={require('./resume.svg')} width='50%' alt="..." />
      </div>
    );
  }

}

export default Resume;
