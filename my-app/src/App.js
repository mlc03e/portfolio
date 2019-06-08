// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import About from './About'
import Portfolio from './Portfolio'


import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <>
        <NavBar />

        <Route path="/home" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/portfolio" exact component={Portfolio}/>
        </>
      </div>
    );
  }

}

export default App;
