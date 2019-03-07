import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import './Home.scss'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    render(){
        return(
            <>
            <CssBaseline/>
            <div className='home'>
                <h1 className='title'>Dusk</h1>
                    <div className='input'>
                        <div onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} value={this.state.username} name='username'/><br></br>
                            <input onChange={this.handleChange} value={this.state.password} name='password' type='password'/><br></br>
                            {this.props.user.username ? <Link to='/dashboard'><Button variant="contained">Play!</Button></Link>:
                            <Button variant="contained" onClick={()=>this.props.login(this.state.username, this.state.password)}>Login</Button>}
                            <br></br>
                        </div>
                        <br></br><Link to='/register'><Button variant="contained">Register</Button></Link>
                    </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {login: login})(Login);