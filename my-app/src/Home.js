import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class Home extends Component {
  state= {
    showPortfolio: false,
    showAbout: false
  }

goToPortfolio= () => {
  // console.log('hi');
 this.setState({showPortfolio: true})
}
goToAbout= () => {
  // console.log('hi');
 this.setState({showAbout: true})
}

  render() {
    return (
      <div className='homeOutter'>
        <div className='homeInner' onClick={this.goToPortfolio}>
          {this.state.showPortfolio && <Redirect to="/portfolio" />}
          <span style={{marginLeft: '50%'}}> designer </span>
        </div>
        <div className='homeInner'>
          <img src= {require('./web-pic.svg')} />
        </div>
        <div className='homeInner' onClick={this.goToAbout}>
          {this.state.showAbout && <Redirect to="/developer" />}
          <span style={{marginLeft: '5%'}}>  developer  </span>
        </div>
      </div>
    );
  }

}

export default Home;
