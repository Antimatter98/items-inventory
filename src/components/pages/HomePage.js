import React, { useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import Inventory from "../inventory/Inventory";

import { firebaseContext } from "../main/MainHandler";
import NavBar from "../core/NavBar";

library.add(faTrash, faPencilAlt);

const HomePage = () => {
  const { user, signOut } = useContext(firebaseContext);

  return (
    <div className="page-container">
      <NavBar user={user} signOut={signOut} />
      <h1>Track your orders here...</h1>
      <Inventory />
      <button onClick={signOut}>Signout</button>
    </div>
  );
};

export default HomePage;
