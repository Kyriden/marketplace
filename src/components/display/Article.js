import React, { Component } from 'react';
import '../../App.css';
import { withAutorization } from '../Autorization';

class Article extends Component {

    clique = () => {
        
        if(this.props.isLogged) {
            this.props.articlePlus(this.props.articles)
        } else {
            return alert("Veuillez tout d'abord vous connecter.");
        }
    }

    render() {
        const nomInfo = this.props.nom ? ( <p>Nom : { this.props.nom }</p> ) : ( <p> Nom : inconnu </p> );
        const descriptionInfo = this.props.description ? ( <p>Description : { this.props.description }</p> ) : ( <p> Description : inconnue </p> );
        const prixInfo = this.props.prix ? ( <p>Prix : { this.props.prix }</p> ) : ( <p> Prix : inconnu </p> );

        return(
            <div>
                <div onClick={this.clique} className='hoverArticle'> 
                    {nomInfo}
                    {descriptionInfo}
                    {prixInfo}
                    <img src={this.props.src} className='sauce' alt="logo" />
                </div>
            </div>
        );
    }
}

export default withAutorization(Article);