import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomEight extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 8
                </p>

                <div className='directions'>
                    <Link to='rEleven'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTen'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rNine'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomEight;