import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomFour extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 4
                </p>

                <div className='directions'>
                    <Link to='rFive'>
                        <button>Left</button>
                    </Link>
                    <Link to='rSeven'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rSix'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomFour;