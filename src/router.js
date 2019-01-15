import React from 'react';
import{Switch, Route, Redirect} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Home from './components/Home';
import Register from './components/Register';
import RoomOne from './rooms/RoomOne';
import RoomTwo from './rooms/RoomTwo';
import RoomThree from './rooms/RoomThree';
import RoomFour from './rooms/RoomFour';
import RoomFive from './rooms/RoomFive';
import RoomSix from './rooms/RoomSix';
import RoomSeven from './rooms/RoomSeven';
import RoomEight from './rooms/RoomEight';
import RoomNine from './rooms/RoomNine';
import RoomTen from './rooms/RoomTen';
import RoomEleven from './rooms/RoomEleven';
import RoomTwelve from './rooms/RoomTwelve';
import RoomThirteen from './rooms/RoomThirteen';
import RoomFourteen from './rooms/RoomFourteen';
import RoomFifteen from './rooms/RoomFifteen';
import End from './rooms/End';

export default(
    <Switch>
        <Route path='/edit' exact component={Edit}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/register' component={Register}/>
        <Route path='/' exact component={Home}/>

        <Route path='/rOne' exact component={RoomOne}/>
        <Route path='/rTwo' exact component={RoomTwo}/>
        <Route path='/rThree' exact component={RoomThree}/>
        <Route path='/rFour' exact component={RoomFour}/>
        <Route path='/rFive' exact component={RoomFive}/>
        <Route path='/rSix' exact component={RoomSix}/>
        <Route path='/rSeven' exact component={RoomSeven}/>
        <Route path='/rEight' exact component={RoomEight}/>
        <Route path='/rNine' exact component={RoomNine}/>
        <Route path='/rTen' exact component={RoomTen}/>
        <Route path='/rEleven' exact component={RoomEleven}/>
        <Route path='/rTwelve' exact component={RoomTwelve}/>
        <Route path='/rThirteen' exact component={RoomThirteen}/>
        <Route path='/rFourteen' exact component={RoomFourteen}/>
        <Route path='/rFifteen' exact component={RoomFifteen}/>

        <Route path='/end' exact component={End}/>
    </Switch>
)