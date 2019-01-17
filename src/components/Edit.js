import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import edit from '../ducks/reducer';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            display_name: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.edit(this.state.username, this.state.password, this.state.display_name, this.state.email)
    }

    render(){
        console.log(this.state)
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <p1>Username: </p1>
                <input onChange={this.handleChange} value ={this.props.username} name='username'/><br></br>
                <p1>Password: </p1>
                <input onChange={this.handleChange} value={this.props.password} name='password' type='password'/><br></br>
                <p1>Display Name: </p1>
                <input onChange={this.handleChange} value={this.props.display_name} name='display_name'/><br></br>
                <p1>Email: </p1>
                <input onChange={this.handleChange} value={this.props.email} name='email'/> <br></br>
                <button>Update</button><br></br>
                <Link to='/dashboard'>Cancel</Link>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        display_name: state.display_name,
        email: state.email
    }
}

export default connect(mapStateToProps, {edit: edit})(Edit);