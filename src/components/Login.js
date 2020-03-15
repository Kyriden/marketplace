import React, { Component } from 'react';
import { withAutorization } from './Autorization';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

class Login extends Component {
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
        return(
            <div className='login'>
                <h1> {this.props.title} </h1>
                <p>
                    Nous sommes contents de vous revoir ! <br/>
                    Connectez-vous dès maintenant :)
                </p>
                <form name="signin" action="" method="get">

                    <p> 
                        Email : <br/>
                        <input type="text" name="email" onChange={this.handleInput} /> 
                    </p> 
                    <p> 
                        Mot de passe : <br/>
                        <input type="password" name="password" onChange={this.handleInput}/>
                    </p> 
                    <input className='bouton' type="submit" value="Valider" onClick={this.handleSubmit}/>

                </form>
            </div>
        );
    }
}

export default compose(
    withRouter,
    withAutorization
)(Login);