import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Home from './components/Home';
import Register from './components/Register';
import getHero from './ducks/reducer'
import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Route path='/edit' exact component={Edit}/>
          <Route path='/dashboard' exact render={()=>this.props.user.username ? <Dashboard/>: <Redirect to='/'/>}/>
          <Route path='/register' component={Register}/>
          <Route path='/' exact component={Home}/>
          </div>
        </Router>

    );
  }
}

export default connect(state=>state, {getHero}) (App);

 