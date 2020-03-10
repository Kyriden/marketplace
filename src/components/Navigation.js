import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
            <ul>
                <li> <Link to='/'> Home </Link> </li>
                <li> <Link to='/signin'> Sign in </Link></li>
                <li> <Link to='/login'> Login </Link></li>
            </ul>
        );
    }
}

export default Navigation;