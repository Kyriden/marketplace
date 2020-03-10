import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './components/Home';
import Signin from './components/Signin';
import Login from './components/Login';
import { AutorizationContext } from './components/Autorization';
import Autorization from './components/Autorization';



class App extends Component {

  state = {
    isLogged: false, 
    email: "",
    toLogin: (email) => this.setState({isLogged: true, email: email})
  }

  render() {
    return (
      <div className="App">
        <AutorizationContext.Provider value={Autorization}>
          <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/signin'>
                    <Signin title='Sign in' toLogin={ this.state.toLogin }/>
                </Route>
                <Route path='/login'>
                    <Login title='Login'/>    
                </Route>
                <Route path='/'>
                    <Home title='Home' email={this.state.email}/>
                </Route>
              </Switch>
          </BrowserRouter>
        </AutorizationContext.Provider>
      </div>
    );
  }
}

export default App;
