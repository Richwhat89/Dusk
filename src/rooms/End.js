import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class End extends Component{
    render(){
        return(
            <div>
                <p>
                    End
                </p>
                <Link to='/dashboard'><button>Exit</button></Link>
            </div>
        )
    }
}

export default End;