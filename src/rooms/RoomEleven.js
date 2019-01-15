import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomEleven extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 11
                </p>

                <div className='directions'>
                    <Link to='rFourteen'>
                        <button>Left</button>
                    </Link>
                    <Link to='rThirteen'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rTwelve'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomEleven;