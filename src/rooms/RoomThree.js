import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomThree extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 3
                </p>

                <div className='directions'>
                    <Link to='rSix'>
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

export default RoomThree;