import React, { useContext } from "react";

import Inventory from "../inventory/Inventory";

import { firebaseContext } from "../main/MainHandler";

const HomePage = () => {
  const { user, signOut } = useContext(firebaseContext);

  return (
    <div className="page-container">
      <h1>Home, Logged in!</h1>
      <Inventory />
      <button onClick={signOut}>Signout</button>
    </div>
  );
};

export default HomePage;
