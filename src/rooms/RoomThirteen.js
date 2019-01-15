import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomThirteen extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 13
                </p>

                <div className='directions'>
                    <Link to='rFourteen'>
                        <button>Left</button>
                    </Link>
                    <Link to='end'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rFifteen'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomThirteen;