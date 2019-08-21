import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class NavBar extends Component {
  state={
    home: false,
    git: false
  }

  goHome= () => {
    this.setState({home:true})
  }
  // goLink= (goTo) => {
  //   console.log(goTo);
  //   if (goTo=== 'gitHub'){
  //     this.setState({git: true})
  //   }
  // }
  render() {
    return (
      <div className='navBar'>
        <div id='logo'>
          <img  src= {require("./mc-logo.svg") } onClick={this.goHome}/>
        </div>
        {this.state.home && <Redirect to="/" />}
        <div className='links'>
          <Link to= "/about" style={{fontSize: "20px", color: "#ffffff", textDecoration: 'none' }} className='link'> About </Link>
          <Link to= "/designer" style={{fontSize: "20px", color: "#ffffff", textDecoration: 'none' }}> Designer </Link>
          <Link to= "/developer" style={{fontSize: "20px", color: "#ffffff", textDecoration: 'none' }}> Developer </Link>
          <Link to= "/resume" style={{fontSize: "20px", color: "#ffffff", textDecoration: 'none' }}> Resume </Link>
        </div>
        <div className= 'infoLinks'>
          <a href= {'https://github.com/mlc03e'}><img src= {require("./github.svg") }   /></a>
          <a href= {'https://medium.com/@mlc03e'}><img src= {require("./medium.svg") } id='medium'/></a>
          <a id= 'linkedin' href= {'https://www.linkedin.com/in/meghan-campbell646/'}><img src= {require("./linkedin.svg") } /></a>
        </div>

      </div>
    );
  }

}

export default NavBar;
