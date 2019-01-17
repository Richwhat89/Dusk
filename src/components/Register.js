import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {register} from '../ducks/reducer';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            display_name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.register(this.state.username, this.state.password, this.state.display_name, this.state.email)
    }

    render(){
        return (
        <div>
            {/* <img src={logo} style={{maxWidth: "100px"}}/> */}
            <form onSubmit={this.handleSubmit}>
                <p1>Username: </p1>
                <input onChange={this.handleChange} value ={this.state.username} name='username'/><br></br>
                <p1>Password: </p1>
                <input onChange={this.handleChange} value={this.state.password} name='password' type='password'/><br></br>
                <p1>Display Name: </p1>
                <input onChange={this.handleChange} value={this.state.display_name} name='display_name'/><br></br>
                <p1>Email: </p1>
                <input onChange={this.handleChange} value={this.state.email} name='email'/> <br></br>
                <button>Register</button><br></br>
                <Link to='/home'>Cancel</Link>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.usernsame,
        password: state.password,
        display_name: state.display_name,
        email: state.email
    }
}

export default connect(mapStateToProps, {register: register})(Register);