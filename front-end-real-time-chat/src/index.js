import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
//import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZojiM_aDsGKeUzeDIT7pkjiMRBvsrIhA',
  authDomain: 'real-time-chat-app-eaf01.firebaseapp.com',
  projectId: 'real-time-chat-app-eaf01',
  storageBucket: 'real-time-chat-app-eaf01.appspot.com',
  messagingSenderId: '409690219452',
  appId: '1:409690219452:web:1306951e80c847c7e441b9',
  measurementId: 'G-EXHWW9WZWC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
