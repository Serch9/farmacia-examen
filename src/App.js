import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';
import Inicio from './components/inicio/Inicio';
import Alta from './components/alta/Alta';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";
import  Update from './components/update/Update';
import Compra from './components/compra/Compra';
import { VerCompra } from './components/verCompra/VerCompra';
import { Agregar } from './components/agregar/Agregar';
import CartProvider from './CartContext';
const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
      <CartProvider>
        <PrivateRoute path="/inicio" component={Inicio} />
        <PrivateRoute path="/alta" component={Alta} />
        <PrivateRoute path="/update/:id" component={Update}/>
        <PrivateRoute path="/ver/:id" component={Update}/>
        <PrivateRoute path="/verCompra/:id" component={VerCompra}/>
        <PrivateRoute path="/compra" component={Compra}/>
        <PrivateRoute path="/agregar/:id" component={Agregar}/>
        </CartProvider>
      </Switch>
    </Router>
  );
}

export default App;