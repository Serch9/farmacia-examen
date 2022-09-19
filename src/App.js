import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';
import Inicio from './components/inicio/Inicio';
import Alta from './components/alta/Alta';
import Inventario from './components/Inventario/Inventario';
import DetallesProd from './components/DetallesProd/DetallesProd';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";
import { Toaster } from 'react-hot-toast';
import EditarProd from './components/EditarProd/EditarProd';
import ProductoState from './context/Producto/ProductoState';
import AddProductoCarrito from './components/AddProductoCarrito/AddProductoCarrito';

const App = () => {

  return (
    <Router>
      <ProductoState>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <PrivateRoute path="/inicio" component={Inicio} />
          <PrivateRoute path="/alta" component={Alta} />
          <PrivateRoute path="/inventario" component={Inventario} />
          <PrivateRoute path="/producto/:producto_id" component={DetallesProd} />
          <PrivateRoute path="/producto_carrito/:producto_id" component={AddProductoCarrito} />
          <PrivateRoute path="/producto_editar/:producto_id" component={EditarProd} />
        </Switch>
        <Toaster />
      </ProductoState>
    </Router>
  );
}

export default App;