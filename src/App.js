import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/user/Login';
import './App.css';
import Register from './components/user/Register';
import Main from './components/items/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider } from 'react-redux';
import store from './store/store';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <header >
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/register" component={Register} />   
        <Route exact path="/main" component={() => <Main />} />
        </header>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
