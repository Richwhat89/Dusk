import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {event} from '../ducks/reducer';

class RoomOne extends Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: '',
            isHidden: true,
            directionsHidden: true,
            points: 0,
            result: '',
            setting: '',
            loading: true
        };
    }

    componentDidMount=()=>
    axios
        .get('/api/room')
        .then(response=>{console.log(response.data)
        this.setState({room_id: response.data.room_id, setting: response.data.setting})
    })

    rndRoom=()=>
    axios
        .get('/api/room')
        .then(response=>{console.log(response)
        this.setState({room_id: response.data.room_id, setting: response.data.setting})
    })

    event=()=>
    axios
        .get('/api/events')
        .then(response=>{console.log(response.data)
        this.setState({question: response.data.question, answer: response.data.answer, isHidden: !this.state.isHidden})
    })

    right=()=>
    axios
        .get('/api/good')
        .then(response=>{console.log(response.data)
        this.setState({praise: response.data.praise, points: this.state.points + response.data.points})
    })

    wrong=()=>
    axios
        .get('/api/bad')
        .then(response=>{console.log(response.data)
        this.setState({mean: response.data.mean, points: this.state.points + response.data.points})
    })

    render(){
        
        return(
            <div>
                <p><br></br>
                    {this.state.setting}
                </p>
                {this.state.loading && <p>An ominous voice enters your mind, "You must face a challenge before the doors in each room will unlock. Answer my questions to proceed, if freedom is what you seek."</p>}<br></br>
                    {this.state.isHidden && <button onClick={()=>this.event()}>Challenge</button>}
                    
                    {this.state.question}<br></br>
                    {!this.state.isHidden && 
                    <div>
                        {this.state.directionsHidden &&<button onClick={this.right}>True</button>}
                        {this.state.directionsHidden &&<button onClick={this.wrong}>False</button>}
                    </div>}<br></br>
                    {/* <button>True</button>
                    <button>False</button> */}

                    {this.state.directionsHidden && <Directions/>}
                {/* <div className='directions'>
                    <Link to='rFour'>
                        <button>Left</button>
                    </Link>
                    <Link to='rTwo'>
                        <button>Forward</button>
                    </Link>
                    <Link to='rThree'>
                        <button>Right</button>
                    </Link>
                </div> */}
                <br></br><Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

const Directions = () => (
    
    <div className='directions'>
        <Link to='rFour'>
            <button>Left</button>
        </Link>
        <Link to='rTwo'>
            <button>Forward</button>
        </Link>
        <Link to='rThree'>
            <button>Right</button>
        </Link>
    </div>
)

export default RoomOne;