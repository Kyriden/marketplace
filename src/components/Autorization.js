import React from 'react';


class Autorization {
    isLogged = false;
    toLogin = () => this.isLogged = true;
}
export default Autorization;

export const AutorizationContext = React.createContext(null);

export const withAutorization = (Component) => {
        class NewComponent extends Component {
            render() {
                return(
                    <AutorizationContext.Consumer>
                        {
                            value => <Component {... value} />
                        }
                    </AutorizationContext.Consumer>
                );
            }
        }
        return NewComponent;
    }

