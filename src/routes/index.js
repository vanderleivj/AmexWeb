import React from 'react';
import { Switch } from 'react-router-dom';
import Route from  './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
}
