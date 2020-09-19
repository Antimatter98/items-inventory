import React, { useContext } from "react";

import { firebaseContext } from "../main/MainHandler";

const LandingPage = () => {
  const { signInWithGoogle } = useContext(firebaseContext);

  return (
    <div>
      <h1>Landing</h1>
      <button onClick={signInWithGoogle}>Signin with Google</button>
    </div>
  );
};

export default LandingPage;
