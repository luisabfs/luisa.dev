import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/sobre';
import Projects from '../pages/projetos';
import Links from '../pages/links';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/projetos" component={Projects} />
      <Route path="/links" component={Links} />
    </Switch>
  </HashRouter>
);

export default Routes;
