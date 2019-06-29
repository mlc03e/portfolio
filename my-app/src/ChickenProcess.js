import React, { Component } from 'react';

class ChickenProcess extends Component {

  render() {
    return (
      <div>
        <h1> ChickenProcess </h1>
        <img src={require('./Chicken1.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken2.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken3.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken4.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken5.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken6.png')} className="d-block w-100" alt="..."/>
        <img src={require('./Chicken7.png')} className="d-block w-100" alt="..."/>

      </div>
    );
  }

}

export default ChickenProcess;
