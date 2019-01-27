import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {register} from '../ducks/reducer';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            display_name: '',
            email: ''
        };
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        console.log(this.props)
        return (
            <>
            <CssBaseline/>
        <div>
            {/* <img src={logo} style={{maxWidth: "100px"}}/> */}
            <div>
                <p>Username: </p>
                <input onChange={this.handleChange} value ={this.state.username} name='username'/><br></br>
                <p>Password: </p>
                <input onChange={this.handleChange} value={this.state.password} name='password' type='password'/><br></br>
                <p>Display Name: </p>
                <input onChange={this.handleChange} value={this.state.display_name} name='display_name'/><br></br>
                <p>Email: </p>
                <input onChange={this.handleChange} value={this.state.email} name='email'/> <br></br>
                {this.props.user.username ? <Link to='/dashboard'><Button variant="contained">Play!</Button></Link>:
                <Button variant="contained" onClick={()=>this.props.register(this.state.username, this.state.password, this.state.display_name, this.state.email)}>Register</Button>}
                <Link to='/'><Button variant="contained">Cancel</Button></Link>
            </div>
        </div>
        </>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {register: register})(Register);