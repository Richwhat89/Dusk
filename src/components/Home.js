import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';


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
        console.log(this.props)
        if(this.props.user.username){
            return <Redirect push to='/dashboard'/>;
        }
        return(
            <div><br></br>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.username} name='username'/><br></br>
                    <input onChange={this.handleChange} value={this.state.password} name='password' type='password'/><br></br>
                    <button>Play</button><br></br>
                </form>
                <br></br><Link to='/register'>Register</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {login: login})(Login);