import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';

class RoomNine extends Component{
    render(){
        return(
            <div>
                <p>
                    Room 9
                </p>

                <div className='directions'>
                    <Link to='rTen'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTwelve'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rEleven'>
                        <button>Right</button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default RoomNine;