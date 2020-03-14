import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";



const config = {
    apiKey: "AIzaSyBeEAk66eKnf-0AfIk3OIlB-Z6GuYHuARc",
    authDomain: "marketplacee-147dd.firebaseapp.com",
    databaseURL: "https://marketplacee-147dd.firebaseio.com",
    storageBucket: "marketplacee-147dd.appspot.com",
    messagingSenderId: "831773645582"
};

firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
