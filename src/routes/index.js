import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
