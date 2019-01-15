import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomSix extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 6
                </p>

                <div className='directions'>
                    <Link to='rSeven'>
                        <button>Left</button>
                    </Link>
                    <Link to='rEight'>
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

export default RoomSix;