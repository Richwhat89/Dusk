import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomFourteen extends Component{
    render(){
        return(
            <div>
                <p>Room 14
                </p>

                <div className='directions'>
                    <Link to='rFifteen'>
                        <button>Left</button>
                    </Link>
                    <Link to='end'>
                        <button>Forward</button>
                    </Link>
                    <Link to='end'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomFourteen;