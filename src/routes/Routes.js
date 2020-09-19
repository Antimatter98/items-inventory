import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact render={() => <div>Main Page</div>} />
        <Route path="/home" exact render={() => <div>home Page</div>} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
