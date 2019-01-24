import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import router from './router';

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