import React from "react";

const NavBar = ({ user, signOut }) => {
  return (
    <div className="navbar">
      <p>{user.displayName}</p>
      <div>
        <button onClick={signOut} className="navbar__signout">
          Signout
        </button>
        <img src={user.photoURL} alt="profile" />
      </div>
    </div>
  );
};

export default NavBar;
