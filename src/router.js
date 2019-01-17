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
import RoomSixteen from './rooms/RoomSixteen';
import RoomSeventeen from './rooms/RoomSeventeen';
import RoomEighteen from './rooms/RoomEighteen';
import RoomNineteen from './rooms/RoomNineteen';
import RoomTwenty from './rooms/RoomTwenty';
import RoomTwentyOne from './rooms/RoomTwentyOne';
import RoomTwentyTwo from './rooms/RoomTwentyTwo';
import RoomTwentyThree from './rooms/RoomTwentyThree';
import RoomTwentyFour from './rooms/RoomTwentyFour';
import RoomTwentyFive from './rooms/RoomTwentyFive';
import RoomTwentySix from './rooms/RoomTwentySix';
import RoomTwentySeven from './rooms/RoomTwentySeven';
import RoomTwentyEight from './rooms/RoomTwentyEight';
import RoomTwentyNine from './rooms/RoomTwentyNine';
import RoomThirty from './rooms/RoomThirty';
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
        <Route path='/rSixteen' exact component={RoomSixteen}/>
        <Route path='/rSeventeen' exact component={RoomSeventeen}/>
        <Route path='/rEighteen' exact component={RoomEighteen}/>
        <Route path='/rNineteen' exact component={RoomNineteen}/>
        <Route path='/rTwenty' exact component={RoomTwenty}/>
        <Route path='/rTwentyOne' exact component={RoomTwentyOne}/>
        <Route path='/rTwentyTwo' exact component={RoomTwentyTwo}/>
        <Route path='/rTwentyThree' exact component={RoomTwentyThree}/>
        <Route path='/rTwentyFour' exact component={RoomTwentyFour}/>
        <Route path='/rTwentyFive' exact component={RoomTwentyFive}/>
        <Route path='/rTwentySix' exact component={RoomTwentySix}/>
        <Route path='/rTwentySeven' exact component={RoomTwentySeven}/>
        <Route path='/rTwentyEight' exact component={RoomTwentyEight}/>
        <Route path='/rTwentyNine' exact component={RoomTwentyNine}/>
        <Route path='/rThirty' exact component={RoomThirty}/>

        <Route path='/end' exact component={End}/>
    </Switch>
)