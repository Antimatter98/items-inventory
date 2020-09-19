import * as firebase from "firebase";
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

const createFirebaseAuthWrapper = withFireBaseAuth({
  providers,
  firebaseAppAuth,
  firebase,
});

export default createFirebaseAuthWrapper;
