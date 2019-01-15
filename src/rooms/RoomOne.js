import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomOne extends Component{
    render(){
        return(
            <div>
                <p>You awaken in forested area surrounding. You can not determine the depth of the trees or what secrets they might hold. Between the branches he can vaguely see the outline of three distinct doorways.
                    One to the left, the right, and the final straight ahead. The hero glances over his shoulder hoping to see an exit but just sees the blackness of a never ending forest behind him. You must continue onward, which door
                    will you use?
                </p>

                <div className='directions'>
                    <Link to='rFour'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTwo'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rThree'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomOne;