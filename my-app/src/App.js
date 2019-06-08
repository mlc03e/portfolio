// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <>
        <NavBar />

        <Route path="/Home" exact component={Home}/>
        </>
      </div>
    );
  }

}

export default App;
