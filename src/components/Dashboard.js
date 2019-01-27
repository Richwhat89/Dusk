import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {login, getUser, getDungeon, getData, changeUser} from '../ducks/reducer';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class Dashboard extends Component{
    constructor(props){
    super(props);

        this.state={
            users: []
        };
    }

    componentDidMount=()=>{
        console.log('fdshjhjbhasoidufhasjkldfhasojk')
        axios
        .get('/auth/users')
        .then(response=>{console.log(response); this.props.getUser(response); this.props.getData(this.props.user.id)
        this.setState({users: [response.data]})
        })
    }

    logout=()=>{
        this.props.changeUser()
        axios
        .get('/auth/user')
    }

    render(){
        // console.log(this.state.users)
        console.log(this.props)

        return(
            <>
            <CssBaseline/>
            <div>{this.state.users.map(user=>{
            return(
            <div><h1>Welcome!</h1>
                    <h1>{this.props.user.display_name}</h1>
                    <Link to='/class'><Button variant="contained">New Trial</Button></Link><br></br>
                    {/* <Link to='/dungeon'><Button variant="contained" onClick={()=>getDungeon()}>Resume Trial</Button></Link> */}
                    <Link to='/edit'><Button variant="contained">Edit</Button></Link><br></br>
                    <Link to='/'><Button variant="contained" onClick={()=>this.logout()}>Exit</Button></Link>
            </div>
            )})}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {login, getUser, getDungeon, getData, changeUser})(Dashboard);