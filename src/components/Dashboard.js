import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import {login, getUser, getDungeon, getData} from '../ducks/reducer';

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

    logout=()=>
        axios
        .get('/auth/user')

    render(){
        console.log(this.state.users)
        console.log(this.props)
        // if(!this.props.user.username){
        //     return <Redirect push to='/'/>;
        // }
        return(
            <div>{this.state.users.map(user=>{
                return(
            <div>
                <header>WELCOME!</header>
                    <h1>{this.props.user.display_name}</h1>
                    <Link to='/class'><button>New Trial</button></Link><br></br>
                    {/* <Link to='/dungeon'><button onClick={()=>getDungeon()}>Resume Trial</button></Link> */}
                    <Link to='/edit'><button>Edit</button></Link><br></br>
                    <Link to='/'><button onClick={()=>this.logout()}>Exit</button></Link>
            </div>
            )
        })}</div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {login, getUser, getDungeon, getData})(Dashboard);