import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class RoomSeven extends Component{

    componentDidMount=(question, answer)=>
    axios
        .get('/api/events', {question, answer})
        .then(response=>{console.log(response)
        this.setState({question: response.data, answer: response.data})
    })

    render(){
        return(
            <div>
                <p><br></br>
                    Room 7
                </p><br></br><br></br>

                <div className='directions'>
                    <Link to='rEight'>
                        <button>Left</button>
                    </Link>
                    <Link to='rNine'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rTen'>
                        <button>Right</button>
                    </Link>
                </div>
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomSeven;