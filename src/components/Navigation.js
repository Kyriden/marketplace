import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withAutorization } from './Autorization';
import caddie from '../img/supermarket.svg';
import crous from '../img/crous.png';

class Navigation extends Component {
    render() {
        return(
            <div className='header'>
                <ul className='navigation'>
                    <img src={crous} className='crous' alt='IUT vétuste'/>
                    <li> <Link to='/'> Home </Link> </li>
                    {this.props.isLogged ? '' : <li> <Link to='/signin'> Sign in </Link></li>}
                    {this.props.isLogged ? '' : <li> <Link to='/login'> Login </Link></li>}
                    {this.props.isLogged ? <li> <Link to='/' onClick={this.props.toLogout}> Log out </Link></li> : '' }
                    <span class='panier'> <Link to='/'>  <img src={caddie} className="caddie" alt="logo" /> {this.props.articles} </Link> </span> 
                </ul>
            </div>
        );
    }
}

export default withAutorization(Navigation);