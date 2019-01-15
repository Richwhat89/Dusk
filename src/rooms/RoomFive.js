import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomFive extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 5
                </p>

                <div className='directions'>
                    <Link to='rSix'>
                        <button>Left</button>
                    </Link>
                    <Link to='rEight'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rSeven'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomFive;