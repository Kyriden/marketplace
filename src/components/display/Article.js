import React, { Component } from 'react';
import '../../App.css';

class Article extends Component {
    render() {
        const nomInfo = this.props.nom ? ( <p>Nom : { this.props.nom }</p> ) : ( <p> Nom : inconnu </p> );
        const descriptionInfo = this.props.description ? ( <p>Description : { this.props.description }</p> ) : ( <p> Description : inconnue </p> );
        const prixInfo = this.props.prix ? ( <p>Prix : { this.props.prix }</p> ) : ( <p> Prix : inconnu </p> );

        return(
            <div>
                <div className='hoverArticle'> 
                    {nomInfo}
                    {descriptionInfo}
                    {prixInfo}
                </div>
            </div>
        );
    }
}

export default Article;