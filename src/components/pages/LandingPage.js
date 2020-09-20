import React, { useContext } from "react";

import { firebaseContext } from "../main/MainHandler";
import { ReactComponent as GoogleLogo } from "../images/search.svg";

const LandingPage = () => {
  const { signInWithGoogle } = useContext(firebaseContext);

  return (
    <div className="landing-page">
      <h1 className="landing-title">UStor_</h1>
      <p>The inventory management system you need</p>
      <button className="google-button" onClick={signInWithGoogle}>
        <span className="google-button__icon">
          <GoogleLogo />
        </span>
        <span>Signin with Google</span>
      </button>
    </div>
  );
};

export default LandingPage;
