import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class RoomSeventeen extends Component{

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
                    Room 8
                </p><br></br><br></br>

                <div className='directions'>
                    <Link to='rTwenty'>
                        <button>Left</button>
                    </Link>
                    <Link to='rEightteen'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rNineteen'>
                        <button>Right</button>
                    </Link>
                </div>
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomSeventeen;