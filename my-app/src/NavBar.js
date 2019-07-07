import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class NavBar extends Component {
  state={
    home: false
  }

  goHome= () => {
    this.setState({home:true})
  }
  render() {
    return (
      <div className='navBar'>
        <img src= {require("./mc-logo.svg") } onClick={this.goHome}/>
        {this.state.home && <Redirect to="/home" />}
        <div className='links'>
          <Link to= "/about" style={{fontSize: "70px", color: "#000000", textDecoration: 'none' }}> About </Link>
          <Link to= "/designer" style={{fontSize: "70px", color: "#000000", textDecoration: 'none' }}> Designer </Link>
          <Link to= "/developer" style={{fontSize: "70px", color: "#000000", textDecoration: 'none' }}> Developer </Link>
        </div>

      </div>
    );
  }

}

export default NavBar;
