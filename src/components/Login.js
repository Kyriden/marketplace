import React, { Component } from 'react';
import { withAutorization } from './Autorization';

class Login extends Component {
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
                        <input type="text" name="prenom" value="" /> 
                    </p> 
                    <p> 
                        Mot de passe : <br/>
                        <input type="password" name="prenom" value="" /> 
                    </p> 
                    <input className='bouton' type="submit" value="Valider" />

                </form>
            </div>
        );
    }
}

export default withAutorization(Login);