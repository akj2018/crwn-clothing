import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBluiXqTr5_XdcuWu0n8r-R3-vYSdmOyv4",
  authDomain: "crwn-db-9bb65.firebaseapp.com",
  databaseURL: "https://crwn-db-9bb65.firebaseio.com",
  projectId: "crwn-db-9bb65",
  storageBucket: "crwn-db-9bb65.appspot.com",
  messagingSenderId: "958772259573",
  appId: "1:958772259573:web:4e7dbaaaa0125c06c433bc",
  measurementId: "G-43JYH9PJJM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
