import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div classname='navbar'>
                <div classname='title'>
                    <Link to='/'>DUSK</Link>
                </div>
                <nav classname='navbar-links'>
                    <ul classname='links'>
                        <li><Link to='/dashboard'>Journal</Link></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;