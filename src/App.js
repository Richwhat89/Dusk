import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Register from './components/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/dashboard' exact render={()=>this.props.user.username ? <Dashboard/>: <Redirect to='/'/>}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/' exact component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
