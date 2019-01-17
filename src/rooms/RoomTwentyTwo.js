import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class RoomTwentyTwo extends Component{

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
                    Room 5
                </p><br></br><br></br>

                <div className='directions'>
                    <Link to='rTwentyThree'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTwentyFour'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rTwentyFive'>
                        <button>Right</button>
                    </Link>
                </div>
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomTwentyTwo;