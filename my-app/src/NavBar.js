import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <div className='navBar'>
        <Link to= "/home" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }}> Home </Link>
        <Link to= "/about" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }}> About </Link>
        <Link to= "/portfolio" style={{fontSize: "50px", color: "#000000", textDecoration: 'none' }}> Portfolio </Link>
      </div>
    );
  }

}

export default NavBar;
