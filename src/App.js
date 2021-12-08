import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'

import configureStore from './store'

import Home from './pages/Home';
import Login from './pages/Login';

import './styles/index.scss';


const store = configureStore();

function isLoggedIn() {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={() => (
            !isLoggedIn() ? <Redirect to="/login" /> : <Home />
          )} exact />
          <Route path="/login" component={() => (
            isLoggedIn() ? <Redirect to="/" /> : <Login />
          )} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
