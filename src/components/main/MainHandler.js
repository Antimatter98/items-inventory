import React, { createContext } from "react";
import createFirebaseAuthWrapper from "../firebase/FirebaseWrapper";

//create a context for firebase user property using the context API
export const firebaseContext = createContext({
  user: null,
  signInWithGoogle: () => {},
  signOut: () => {},
});

const MainHandler = ({ user, signInWithGoogle, signOut, children }) => {
  return (
    <firebaseContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </firebaseContext.Provider>
  );
};

export default createFirebaseAuthWrapper(MainHandler);
