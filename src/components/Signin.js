import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withAutorization } from './Autorization';
import { compose } from 'recompose';

class Signin extends Component {
    state={
        email: '',
        password: ''
    }

    handleInput=(e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit=() => {
        this.props.toLogin(this.state.email);
        this.props.history.push('/');
    }

    render() {
        //console.log(this.props);
        return(
            <div className='signin'>
                <h1> {this.props.title} </h1>
                <p> Vous êtes un nouveau client ? Créez un compte dès maintenant !</p>
                <p> 
                    Email : <br/>
                    <input type="text" name="email" onChange={this.handleInput} /> 
                </p> 
                <p> 
                    Mot de passe : <br/>
                    <input type="password" name="password" onChange={this.handleInput}/> 
                </p> 
                <p> J'accepte les conditions générales<input type="checkbox" name="interet" value="loc" /> </p> 
                <input className='bouton' type="submit" value="Valider" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default compose(
    withRouter,
    withAutorization
)(Signin);