import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <Redirect to="/docs" />
      </Route>
      <Route exact path="/docs">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
    </Switch>
  </div>

);
