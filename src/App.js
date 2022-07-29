import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';
import Inicio from './components/inicio/Inicio';
import Inventario from './components/inventario/Inventario';
import Alta from './components/alta/Alta';
import Ver from './components/verproducto/Producto';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <PrivateRoute path="/inicio" component={Inicio} />
        <PrivateRoute path="/inventario" component={Inventario} />
        <PrivateRoute path="/alta" component={Alta} />
        <PrivateRoute path="/ver" component={Ver} />
      </Switch>
    </Router>
  );
}

export default App;
