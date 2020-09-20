import firebase from "firebase/app";
import "firebase/auth";
import withFireBaseAuth from "react-with-firebase-auth";

import FirebaseConfig from "./FirebaseConfig";

const firebaseApp = firebase.initializeApp(FirebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

//adding scopes
providers.googleProvider.addScope("openid");
providers.googleProvider.addScope("profile");
providers.googleProvider.addScope("email");

// This will act like a Higher Order Component for the main handler
// passes down user object, signin and signout methods as props to MainHandler
const createFirebaseAuthWrapper = withFireBaseAuth({
  providers,
  firebaseAppAuth,
  firebase,
});

export default createFirebaseAuthWrapper;
