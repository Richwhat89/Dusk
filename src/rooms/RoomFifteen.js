import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class RoomFifteen extends Component{

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
                    Room 15
                </p><br></br><br></br>

                <div className='directions'>
                    <Link to='rSeventeen'>
                        <button>Left</button>
                    </Link>
                    <Link to='rSixteen'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rEighteen'>
                        <button>Right</button>
                    </Link>
                </div>
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomFifteen;