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

export const createUserProfileDocument = async (userAuth, additonlData) => {
  if (!userAuth) return;
  const docRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = docRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await docRef.set({
        displayName,
        email,
        createdAt,
        ...additonlData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return docRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider); //auth.signInWithPopup(provider);

export default firebase;
