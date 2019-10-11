import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/sobre';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
