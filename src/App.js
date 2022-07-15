import React from 'react';
import {BrowserRouter as Router, Link as Switch, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
