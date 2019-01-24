import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getHero, login, getDungeon} from '../ducks/reducer';

class End extends Component{
    constructor(props){
        super(props);

        this.state={
            dungeon: [],
            hero: []

        };
    }

    componentDidMount=()=>{
    axios
        .post('/api/endings/total_points', {killCount: this.props.dungeon.killCount})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <p>
                    <br></br>YOU DIED!<br></br><br></br>
                    {this.props.user.display_name}'s Dungeon Trial has come to a devestating end!<br></br><br></br>
                    This failure will be recorded.<br></br><br></br>
                    Your weak {this.props.hero.class} was killed by a {this.props.dungeon.monsterType}!<br></br><br></br>
                    Kill Count: {this.props.dungeon.killCount}
                </p><br></br><br></br>
                <Link to='/dashboard'><button>Exit</button></Link>
            </div>
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

export default connect(mapStateToProps, {getHero, login, getDungeon})(End);