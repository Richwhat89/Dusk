import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {edit} from '../ducks/reducer';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            display_name: '',
            email: ''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.edit(this.state.username, this.state.password, this.state.display_name, this.state.email)
    }

    componentDidMount=()=>{
        this.setState({username: this.props.user.username, password: this.props.user.password, display_name: this.props.user.display_name, email: this.props.email})
    }

    deleteUser=(id)=>
    axios
    .delete(`/auth/delete/${id}`)

    render(){
        console.log(this.props.user.id)
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <p>Username: </p>
                <input onChange={this.handleChange} placeholder={this.props.username} value ={this.props.username} name='username'/><br></br>
                <p>Password: </p>
                <input onChange={this.handleChange} placeholder={this.props.password} value={this.props.password} name='password' type='password'/><br></br>
                <p>Display Name: </p>
                <input onChange={this.handleChange} placeholder={this.props.display_name} value={this.props.display_name} name='display_name'/><br></br>
                <p>Email: </p>
                <input onChange={this.handleChange} placeholder={this.props.email} value={this.props.email} name='email'/> <br></br>
                {<button onClick={()=>this.props.edit()}>Update</button> ? <Link to='/dashboard'><button>Dashboard</button></Link>:<button onClick={()=>this.props.edit()}>Update</button>}<br></br>
                <Link to='/register'><button onClick={()=>this.deleteUser(this.props.user.id)}>*DELETE USER*</button></Link>
                <Link to='/dashboard'><button>Cancel</button></Link>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {edit: edit})(Edit);