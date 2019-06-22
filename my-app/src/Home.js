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
        <span style={{marginLeft: '40%'}}> designer </span>

        </div>
        <div className='homeInner'>
          <img src= 'https://www.frogdesign.com/wp-content/uploads/2018/11/Amrita-Marino-FrogDesign-TechTrendsHeader-1440x810-1024x576.gif' />
        </div>
        <div className='homeInner' onClick={this.goToAbout}>
        {this.state.showAbout && <Redirect to="/about" />}

        <span style={{marginLeft: '5%'}}>  developer  </span>
        </div>

      </div>
    );
  }

}

export default Home;
