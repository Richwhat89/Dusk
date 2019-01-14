import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <header>WELCOME!</header>
                    <h1>{this.props.user.username}</h1>
                    <Link to='/'>Exit</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Dashboard);