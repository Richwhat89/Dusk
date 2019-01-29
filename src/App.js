import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import router from './router';
import Music from './components/Music';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          {router}
        </HashRouter>
        <Music/>
      </div>
    );
  }
}

export default App; 