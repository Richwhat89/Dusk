import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getHero, login, getMonster} from '../ducks/reducer';

class Dungeon extends Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: '',
            isHidden: true,
            hideDirections: true,
            points: this.props.hero.health,
            monsterHealth: null,
            result: '',
            setting: '',
            loading: true,
            praiseToggle: false,
            meanToggle: false,
            hideTrueFalse: false,
            hideText: false,
            display_name: '',
            monsterType: '',
            attack: 1
        };
    }

    componentDidMount=()=>
    axios
        .get('/api/room')
        .then(response=>{console.log(response.data); this.monster()
        this.setState({room_id: response.data.room_id, setting: response.data.setting})
    })

    rndRoom=()=>
    axios
        .get('/api/rndRoom')
        .then(response=>{console.log(response); this.monster()
        this.setState({room_id: response.data.room_id, setting: response.data.setting, praiseToggle: false, meanToggle: false, hideTrueFalse: false, hideText: true, isHidden: true, question: '', hideDirections: true})
    })

    event=()=>
    axios
        .get('/api/events')
        .then(response=>{console.log(response.data);
        this.setState({question: response.data.question, answer: response.data.answer, isHidden: false})
    })

    right=()=>
    axios
        .get('/api/good')
        .then(response=>{console.log(response.data)
        this.setState({praise: response.data.praise, monsterHealth: this.state.monsterHealth - response.data.points, praiseToggle: true, hideTrueFalse: true, hideDirections: false, isHidden: true})
    })

    wrong=()=>
    axios
        .get('/api/bad')
        .then(response=>{console.log(response.data)
        this.setState({mean: response.data.mean, points: this.state.points + response.data.points, meanToggle: true, hideTrueFalse: true, hideDirections: false, isHidden: true})
    })

    monster=()=>
    axios
        .get('/api/monster')
        .then(response=>{console.log(response.data)
        this.setState({monsterType: response.data[0].type, monsterHealth: response.data[0].health})
    })

    attack=(attack)=>{
        if((this.props.hero.weapon === 'Axe' && attack * .5) ||
            (this.props.hero.weapon === ' Daggers' && attack * 3) ||
            (this.props.hero.weapon === 'Tome' && attack * 2) ||
            (this.props.hero.weapon === 'Staff' && attack * 1.75)){
                return attack
            }

    }

    render(){
        console.log(this.props)
        console.log(this.state.monsterHealth)
        return(
            <div>
                <p></p>
                <p><br></br>
                    {this.state.setting}
                </p>
                <div>
                    {!this.state.hideText && this.state.loading && 
                    <p>An ominous voice enters your mind, "You must face my minions before the doors in each room will unlock. 
                    Answer my questions to proceed, if freedom is what you seek."</p>}
                    <br></br>
                    {this.state.monsterHealth != 0 ? this.state.isHidden && <button onClick={()=>this.event()}>Battle!</button>:null}
                    {!this.state.isHidden && this.state.question}
                    <br></br>
                </div>
                    {!this.state.isHidden && 
                <div>
                    {<button onClick={this.state.answer === 'True' ? this.right : this.wrong}>True</button>}

                    {<button onClick={this.state.answer === 'False' ? this.right : this.wrong}>False</button>}
                </div>}
                <br></br>
                {this.state.praiseToggle ? <p>{this.state.praise}</p> : null}
                {this.state.meanToggle ? <p>{this.state.mean}</p> : null} 
                <div>
                    <div className='directions'>
                        {this.state.monsterHealth === 0 ? !this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Left</button>:null}
                        {this.state.monsterHealth === 0 ? !this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Forward</button>:null}
                        {this.state.monsterHealth === 0 ? !this.state.hideDirections &&<button onClick={()=>this.rndRoom()}>Right</button>:null}
                    </div>
                </div>

                <div>
                    <div>
                        {this.props.hero.class}<p></p>
                        {this.state.points}
                    </div>
                    <p></p>
                    <div>
                        {this.state.monsterType}<p></p>
                        {this.state.monsterHealth}
                    </div>
                </div>
                <br></br>
                <Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        hero: state.hero,
    }
}

export default connect(mapStateToProps, {getHero, login})(Dungeon);