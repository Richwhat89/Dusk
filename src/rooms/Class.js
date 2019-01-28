import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getHero, login} from '../ducks/reducer';

import './Class.css';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class Class extends Component{
    constructor(props){
        super(props);

        this.state={
            heros: []
        };
    }

    componentDidMount=()=>
        axios
        .get('/api/hero')
        .then(response=>{console.log(response)
        this.setState({heros: response.data})
    })
    
    render(){
        // const{hero}=this.state;
        return(
            <div className="background">{this.state.heros.map(hero=>{
                return (
                <>
                <CssBaseline/>
                <div className='heros'>
                <Link to='/Dungeon'>
                <Button className="card" variant="contained" onClick={()=>this.props.getHero(hero)}>
                <div>{hero.class}</div><br></br>
                <div>{hero.health}</div><br></br>
                <div>{hero.weapon}</div><br></br>
                </Button></Link>
                </div>
                </>
                )
            })}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        hero: state.hero
    }
}

export default connect(mapStateToProps, {getHero, login})(Class);