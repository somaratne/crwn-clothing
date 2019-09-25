import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA81WR7Ca6NsP6RqnY9UKDrJwc-LBH6mdg",
  authDomain: "crwn-db-50d50.firebaseapp.com",
  databaseURL: "https://crwn-db-50d50.firebaseio.com",
  projectId: "crwn-db-50d50",
  storageBucket: "",
  messagingSenderId: "866107353646",
  appId: "1:866107353646:web:516d81044dd80b6f018dbf",
  measurementId: "G-B7W8RKMDM7"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider); //auth.signInWithRedirect(provider);

export default firebase;
