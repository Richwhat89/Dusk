import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

import router from './router';
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
        <HashRouter>
          {router}
        </HashRouter>

    );
  }
}

// render={()=>this.props.user.username ? <Dashboard/>: <Redirect to='/'/>}

// export default connect(state=>state, {getHero}) (App);

export default App; 