import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  NotFound,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* TODO: add remaining routes */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
