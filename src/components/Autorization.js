import React from 'react';

const AutorizationContext = React.createContext(null);
export class AutorizationProvider extends React.Component {
    state = {
        isLogged: false, 
        email: "",
        articles: 0,
        toLogin: (email) => this.setState({isLogged: true, email: email}),
        toLogout: () => this.setState({isLogged: false, articles: 0}),
        articlePlus: (articles) => this.setState({articles: articles+1})
    };

    render() {
        return(
            <AutorizationContext.Provider value={this.state}>
                {this.props.children}
            </AutorizationContext.Provider>
        );
    }
}

export const withAutorization = (Component) => {
    class NewComponent extends React.Component {
        render() {
            return(
                <AutorizationContext.Consumer>
                    { value => <Component {...value} {...this.props} /> }
                </AutorizationContext.Consumer>
            );
        }
    }
    return NewComponent;
}

// class AmILogged extends React.Component {
//     render() {
//         return(
//             <h5> {this.props.isLogged ? 'Je suis connecté !' : 'Je ne suis pas connecté'} </h5>
//         );
//     }
// }
// export const AmILoggedWithAutorization = withAutorization(AmILogged);

// class ToConnect extends React.Component {
//     render() {
//         return(
//             <button onClick = {this.props.toLogin}> Se connecter </button>
//         );
//     }
// }
// export const ToConnectWithAutorization = withAutorization(ToConnect);

