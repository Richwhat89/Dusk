import React from 'react';
import{Switch, Route, Redirect} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Home from './components/Home';
import Register from './components/Register';
import Class from './rooms/Class';
import Dungeon from './rooms/Dungeon';
import End from './rooms/End';

export default(
    <Switch>
        <Route path='/edit' exact component={Edit}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/register' component={Register}/>
        <Route path='/' exact component={Home}/>
        <Route path='/Class' exact component={Class}/>
        <Route path='/Dungeon' exact component={Dungeon}/>
        <Route path='/end' exact component={End}/>
    </Switch>
)