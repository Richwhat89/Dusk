import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {getHero, login} from '../ducks/reducer';

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
            <div>{this.state.heros.map(hero=>{
                return (
                <>
                <CssBaseline/>
                <Link to='/Dungeon'>
                <Button variant="contained" onClick={()=>this.props.getHero(hero)}>
                {hero.class}<br></br>
                {hero.health}<br></br>
                {hero.weapon}<br></br>
                </Button></Link>
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