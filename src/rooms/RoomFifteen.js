import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomFifteen extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 15
                </p>

                <div className='directions'>
                    <Link to='end'>
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

export default RoomFifteen;