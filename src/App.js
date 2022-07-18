import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';
import Inicio from './components/inicio/Inicio';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <PrivateRoute path="/inicio" component={Inicio} />
      </Switch>
    </Router>
  );
}

export default App;
