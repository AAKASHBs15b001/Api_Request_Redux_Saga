import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Component from './component'
import { Provider } from 'react-redux';
import {store} from './store'
const App = () => (
  <Provider store={store}>
    <Component></Component>
  </Provider>
);


export default App;

