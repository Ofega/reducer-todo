import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../../pages/Dashboard';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => <Dashboard />} />
  </Switch>
);

export default AppRouter;