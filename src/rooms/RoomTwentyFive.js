import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class RoomTwentyFive extends Component{

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
                    Room 4
                </p><br></br><br></br>

                <div className='directions'>
                    <Link to='rTwentyEight'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTwentySix'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rTwentySeven'>
                        <button>Right</button>
                    </Link>
                </div>
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomTwentyFive;