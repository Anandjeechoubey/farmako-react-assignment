import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store'

import Home from './pages/Home';
import Login from './pages/Login';

// import Navbar from "./layout/Navbar";

import './styles/index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
