import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomTwo extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 2
                </p>

                <div className='directions'>
                    <Link to='rThree'>
                        <button>Left</button>
                    </Link>
                    <Link to='rFour'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rFive'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomTwo;