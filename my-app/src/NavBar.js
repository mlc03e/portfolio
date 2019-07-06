import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <div className='navBar'>
        
          <img src= {require("./mc-logo.svg") } />


      <div className='links'>
          <Link to= "/home" style={{fontSize: "50px", color: "#ffffff", textDecoration: 'none' }}> Home </Link>
          <Link to= "/about" style={{fontSize: "50px", color: "#ffffff", textDecoration: 'none' }}> About </Link>
          <Link to= "/portfolio" style={{fontSize: "50px", color: "#ffffff", textDecoration: 'none' }}> Portfolio </Link>
        </div>
      </div>
    );
  }

}

export default NavBar;
