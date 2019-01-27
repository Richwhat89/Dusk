import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getHero, getDungeon, login} from '../ducks/reducer';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

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
            attack: 1,
            killCount: 0,
            endToggle: false
        };
    }

    componentDidMount=()=>
    axios
        .get('/api/room')
        .then(response=>{console.log(response.data); this.monster(); this.multiplier()
        this.setState({room_id: response.data.room_id, setting: response.data.setting})
    })

    rndRoom=()=>
    axios
        .get('/api/rndRoom')
        .then(response=>{console.log(response); this.monster(); this.multiplier()
        this.setState({room_id: response.data.room_id, setting: response.data.setting, praiseToggle: false, meanToggle: false, hideTrueFalse: false, hideText: true, isHidden: true, question: '', hideDirections: true, attack: 1}, ()=>{this.multiplier()})
    })

    event=()=>
    axios
        .get('/api/events')
        .then(response=>{console.log(response.data);
        this.setState({question: response.data.question, answer: response.data.answer, isHidden: false, praiseToggle: false, meanToggle: false})
    })

    right=()=>
    axios
        .get('/api/good')
        .then(response=>{console.log(response.data); this.killCounter()
        this.setState({
            praise: response.data.praise, 
            monsterHealth: this.state.monsterHealth - (response.data.points + this.state.attack), 
            praiseToggle: true, 
            hideTrueFalse: true, 
            hideDirections: false, 
            isHidden: true
        }, ()=>{this.killCounter()})})


    killCounter=()=>{console.log('anything'); this.setState({killCount: (this.state.monsterHealth <= 0 ? this.state.killCount +1 : this.state.killCount)})}

    wrong=()=>
    axios
        .get('/api/bad')
        .then(response=>{console.log(response.data)
        this.setState({mean: response.data.mean, points: this.state.points - (this.state.monsterHealth - response.data.points), meanToggle: true, hideTrueFalse: true, hideDirections: false, isHidden: true}, ()=>{this.gameOver()})
    })

    monster=()=>
    axios
        .get('/api/monster')
        .then(response=>{console.log(response.data)
        this.setState({monsterType: response.data[0].type, monsterHealth: response.data[0].health})
    })

    multiplier=()=>{
        ((this.props.hero.weapon === 'Axe' && this.setState({attack: this.state.attack * 1.75})) ||
        (this.props.hero.weapon === 'Daggers' && this.setState({attack: this.state.attack * 3})) ||
        (this.props.hero.weapon === 'Tome' && this.setState({attack: this.state.attack * 2})) ||
        (this.props.hero.weapon === 'Staff' && this.setState({attack: this.state.attack * 1})))
    }

    total_points=(killCount)=>
    axios
        .put('/api/endings/total_points', {killCount})

    gameOver=()=>{this.props.getDungeon(this.state); this.setState({endToggle: this.state.points <= 0 ? true : null})}

    render(){
        console.log(this.props)
        console.log(this.state.monsterHealth)
        console.log(this.state.attack)
        console.log(this.state.killCount)
        
        return(
            <>
            <CssBaseline/>
            <div>
                <h1>{this.props.user.display_name}'s Dungeon Trial</h1>
                <h4><br></br>
                    {this.state.setting}
                </h4>
                <h4>
                    {!this.state.hideText && this.state.loading && 
                    <p>An ominous voice enters your mind, "You must face my minions before the doors in each room will unlock. 
                    Answer my questions to proceed, if freedom is what you seek."</p>}
                    <br></br>
                    {this.state.monsterHealth > 0 ? this.state.isHidden && <Button variant="contained" onClick={()=>this.event()}>Battle!</Button>:null}
                    {!this.state.isHidden && this.state.question}
                    <br></br>
                </h4>
                    {!this.state.isHidden && 
                <div>
                    {<Button variant="contained" onClick={this.state.answer === 'True' ? this.right : this.wrong}>True</Button>}

                    {<Button variant="contained" onClick={this.state.answer === 'False' ? this.right : this.wrong}>False</Button>}
                </div>}
                <br></br>
                {this.state.praiseToggle ? <subtitle2>{this.state.praise}</subtitle2> : null}
                {this.state.meanToggle ? <subtitle2>{this.state.mean}</subtitle2> : null} 
                <div>
                    <div className='directions'>
                        {this.state.monsterHealth <= 0 ? !this.state.hideDirections &&<Button variant="contained" onClick={()=>this.rndRoom()}>Left</Button>:null}
                        {this.state.monsterHealth <= 0 ? !this.state.hideDirections &&<Button variant="contained" onClick={()=>this.rndRoom()}>Forward</Button>:null}
                        {this.state.monsterHealth <= 0 ? !this.state.hideDirections &&<Button variant="contained" onClick={()=>this.rndRoom()}>Right</Button>:null}
                    </div><br></br>
                </div>

                <subtitle2>
                    <subtitle2>
                        {this.props.hero.class}<p></p>
                        {this.state.points}
                    </subtitle2>
                    <p></p>
                    <subtitle2>
                        {this.state.monsterType}<p></p>
                        {this.state.monsterHealth}
                    </subtitle2>
                </subtitle2>
                <br></br>
                    <subtitle2>
                        Kill count: {this.state.killCount}
                    </subtitle2><br></br><br></br>
                <Link to='/dashboard'><Button variant="contained">Exit</Button></Link>
                {this.state.endToggle ? <Redirect to='/end'/> : null}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        hero: state.hero,
        dungeon: state.dungeon
    }
}

export default connect(mapStateToProps, {getHero, login, getDungeon})(Dungeon);