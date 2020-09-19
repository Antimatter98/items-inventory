import React, { useContext } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { firebaseContext } from "../components/main/MainHandler";

const Routes = () => {
  const user = useContext(firebaseContext);
  console.log(user);

  const conditionalRender = () =>
    user.user ? (
      <div>
        <h1>Home, Logged in!</h1>
        <p>{JSON.stringify(user.user)}</p>
        <button onClick={user.signOut}>Signout</button>
      </div>
    ) : (
      <div>
        <h1>Landing</h1>
        <button onClick={user.signInWithGoogle}>Signin with Google</button>
      </div>
    );

  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact render={() => conditionalRender()} />
        {/* <Route path="/home" exact render={() => <div>home Page</div>} /> */}
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
