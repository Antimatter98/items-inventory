import React, { useContext } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { firebaseContext } from "../components/main/MainHandler";
import HomePage from "../components/pages/HomePage";
import LandingPage from "../components/pages/LandingPage";

const Routes = () => {
  const { user } = useContext(firebaseContext);
  console.log(user);

  const conditionalLandingPageRender = () =>
    user ? <Redirect to="/home" /> : <LandingPage />;
  const conditionalHomePageRender = () =>
    user ? <HomePage /> : <Redirect to="/" />;

  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact render={() => conditionalLandingPageRender()} />
        <Route path="/home" exact render={() => conditionalHomePageRender()} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
