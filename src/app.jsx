import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Login,
  Signup,
  Profile,
  Logout,
  Books,
  BookDetails,
  Users,
  UserDetails,
  NotFound,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:bookId" component={BookDetails} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:userId" component={UserDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
