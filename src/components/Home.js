import React, { Component } from 'react';
import Article from './display/Article'
import { withAutorization } from './Autorization';
import sauce from '../img/sauce.png';
import rat from '../img/rat.png';
import legumes from '../img/legumes.png';

class Home extends Component {
    render() {
        return(
            <div>
                <div className='home'>
                    <h1> {this.props.title} </h1>
                    {this.props.isLogged ? <h5> Bienvenue, {this.props.email} !</h5> : <p>Vous n'êtes pas connecté.</p>}
                </div>
                <Article src={sauce} nom='Sauce du Crous' description='Une magnifique sauce épicée, parfaite pour relever le goût de vos plus grands plats tels que le homard farci au caviar !' prix='0.10ct/pièce'/>
                <Article src={rat} nom='Viande de rat' description='Une viande incroyable récoltée directement dans nos locaux ! Traces de mort-aux-rats pouvant être présentes.' prix='2€/kg'/>
                <Article src={legumes} nom='Légumes à la chaudière' description="La côté convivial et chaleureux de notre chaudière à gaz nous a poussé à cuire nos légumes à l'intérieur. Bon appétit !" prix='4€/kg'/>
            </div>
        );
    }
}

export default withAutorization(Home);