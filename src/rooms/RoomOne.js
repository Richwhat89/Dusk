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
            hideDirections: true,
            points: 0,
            result: '',
            setting: '',
            loading: true,
            praiseToggle: false,
            meanToggle: false,
            hideTrueFalse: false,
            hideText: false,
            display_name: ''
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
        .get('/api/rndRoom')
        .then(response=>{console.log(response)
        this.setState({room_id: response.data.room_id, setting: response.data.setting, praiseToggle: false, meanToggle: false, hideTrueFalse: false, hideText: true, isHidden: true, question: '', hideDirections: true})
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
        this.setState({praise: response.data.praise, points: this.state.points + response.data.points, praiseToggle: true, hideTrueFalse: true, hideDirections: false}, ()=>{
            if(this.state.points == -5)
            return('Game Over')
        })
    })

    wrong=()=>
    axios
        .get('/api/bad')
        .then(response=>{console.log(response.data)
        this.setState({mean: response.data.mean, points: this.state.points + response.data.points, meanToggle: true, hideTrueFalse: true, hideDirections: false}, ()=>{
            if(this.state.points == -5)
            return('Game Over')
        })
    })

    render(){
        
        return(
            <div>
                <p>{this.state.points}</p>
                <p><br></br>
                    {this.state.setting}
                </p>
                <div>
                    {!this.state.hideText && this.state.loading && 
                    <p>An ominous voice enters your mind, "You must face a challenge before the doors in each room will unlock. 
                    Answer my questions to proceed, if freedom is what you seek."</p>}
                    <br></br>
                    {this.state.isHidden && <button onClick={()=>this.event()}>Challenge</button>}
                    {this.state.question}
                    <br></br>
                </div>
                    {!this.state.isHidden && 
                <div>
                    {!this.state.hideTrueFalse && <button onClick={this.state.answer == 'True' ? this.right : this.wrong }>True</button>}
                    {!this.state.hideTrueFalse && <button onClick={this.state.answer == 'False' ? this.right : this.wrong }>False</button>}
                </div>}
                <br></br>
                {this.state.praiseToggle ? <p>{this.state.praise}</p> : null}
                {this.state.meanToggle ? <p>{this.state.mean}</p> : null} 
                <div>
                    <div className='directions'>
                        {!this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Left</button>}
                        {!this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Forward</button>}
                        {!this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Right</button>}
                    </div>
                </div>
                <br></br>
                <Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default RoomOne;