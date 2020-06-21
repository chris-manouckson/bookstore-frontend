import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Login,
  Signup,
  Profile,
  Books,
  BookDetails,
  NotFound,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:bookId" component={BookDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
