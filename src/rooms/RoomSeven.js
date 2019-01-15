import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomSeven extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 7
                </p>

                <div className='directions'>
                    <Link to='rEight'>
                        <button>Left</button>
                    </Link>
                    <Link to='rNine'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rTen'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomSeven;