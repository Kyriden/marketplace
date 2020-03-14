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
import { AutorizationProvider, withAutorization } from './components/Autorization';
import {ToConnectWithAutorization, AmILoggedWithAutorization} from './components/Autorization';



class App extends Component {
  render() {
    return (
      <div className="App">
        <AutorizationProvider>
          <BrowserRouter>
            <Navigation />
            {/* <ToConnectWithAutorization />
            <AmILoggedWithAutorization /> */}
            <Switch>
                <Route path='/signin'>
                    <Signin title='Sign in'/>
                </Route>
                <Route path='/login'>
                    <Login title='Login'/>    
                </Route>
                <Route path='/'>
                    <Home title='Home'/>
                </Route>
              </Switch>
          </BrowserRouter>
        </AutorizationProvider>
      </div>
    );
  }
}

export default App;
