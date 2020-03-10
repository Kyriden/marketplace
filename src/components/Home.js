import React, { Component } from 'react';
import Article from './display/Article'

class Home extends Component {
    render() {
        return(
            <div>
                <h1> {this.props.title} </h1>
                <h5> Bienvenue, {this.props.email}</h5>
                <Article nom='Sauce du Crous' description='Une magnifique sauce !' prix='0.25ct/pièce'/>
                <Article nom='Viande de rat' description='Une viande incroyable récoltée dans nos locaux !' prix='2€/kg'/>
                <Article nom='Légumes à la chaudière' description="La côté convivial et chaleureux de notre chaudière nous a poussé à cuire nos légumes à l'intérieur. Bon appétit !" prix='4€/kg'/>
            </div>
        );
    }
}

export default Home;