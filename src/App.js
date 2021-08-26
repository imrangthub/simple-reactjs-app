import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{paddingLeft:50}} >

          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="navbar-brand" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="navbar" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="navbar-brand"
                >Sign Up</a></li>
            </ul>
            <ul className="my-2 my-lg-0" >
              <li className="nav-item"><a className="navbar-brand"
                >Login</a></li>
            </ul>
            <ul className="my-2 my-lg-0" >
              <li className="nav-item"><a className="navbar-brand"
               >User Profile</a></li>
            </ul>
            <ul className="my-2 my-lg-0" >
              <li className="nav-item"><a className="navbar-brand"
                >Logout</a></li>
            </ul>
          </div>

        </nav>
        <div className="App">
          <Switch>
            <Route exact path='/' component={HomeComponent}></Route>
            <Route exact path='/about' component={AboutComponent}></Route>
            <Route exact path='/contact' component={ContactComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;