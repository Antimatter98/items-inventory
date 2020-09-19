import React, { useContext } from "react";

import { firebaseContext } from "../main/MainHandler";

const HomePage = () => {
  const { user, signOut } = useContext(firebaseContext);

  return (
    <div className="page-container">
      <h1>Home, Logged in!</h1>
      <p>{JSON.stringify(user)}</p>
      <button onClick={signOut}>Signout</button>
    </div>
  );
};

export default HomePage;
