import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Bar, HorizontalBar} from 'react-chartjs-2';
import {getHero, login, getDungeon, getData} from '../ducks/reducer';

import './End.css'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class End extends Component{
    constructor(props){
        super(props);

        this.state={
            dungeon: [],
            hero: [],
            data: []
        };
    }

    componentDidMount=()=>{
    axios
        .post('/api/endings/total_points', {killCount: this.props.dungeon.killCount, id: this.props.user.id})
        .then(this.props.getData(this.props.user.id))
    }

    render(){
        console.log(this.props)
        let initialData;
        let labels;
        let data;

        if(this.props.data){
            initialData = this.props.data.slice();
    
            initialData.sort((a, b)=>{
                if(a.total_points > b.total_points){
                    return -1
                }
                else if(a.total_points < b.total_points){
                    return 1
                }else{
                    return 0
                }
            })}
            console.log(initialData)
            let highscores = [initialData[0]];

            for(let i = 0; i < initialData.length; i++){
                if(highscores.findIndex(val=>val.display_name === initialData[i].display_name)=== -1){
                    highscores.push(initialData[i]);
                }
            }
            console.log(highscores)
            labels=[];
            data=[];

            for( let i = 0; i < highscores.length; i++){
                labels.push(highscores[i].display_name)
                data.push(highscores[i].total_points)
            }

            console.log(data)
            console.log(highscores)

        return(
            <>
            <CssBaseline/>
            <div className='end'>
                <h4>
                    <br></br>YOU DIED!<br></br><br></br>
                    {this.props.user.display_name}'s Dungeon Trial has come to a devestating end!<br></br><br></br>
                    This failure will be recorded.<br></br><br></br>
                    Your weak {this.props.hero.class} was killed by a {this.props.dungeon.monsterType}!<br></br><br></br>
                    Kill Count: {this.props.dungeon.killCount}
                </h4><br></br><br></br>
                <div className="graph">
                <HorizontalBar data={{
                labels: labels,
                datasets:[{
                    label: "High Scores",
                    backgroundColor: 'rgba(255, 99, 132, .6)',
                    borderColor: 'rgba(255, 99, 99, 1)',
                    data: data
                }]
            }}/>
            
            <br></br>
            <Link to='/'><Button variant="contained">Exit</Button></Link>
            </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        hero: state.hero,
        dungeon: state.dungeon,
        data: state.data
    }
}

export default connect(mapStateToProps, {getHero, login, getDungeon, getData})(End);