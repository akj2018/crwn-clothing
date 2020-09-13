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

// Utility method for stroing collections data automatically without manually doing it
export const createCollectionAndDocuments = async (
  collectionKey,
  itemsToAdd
) => {
  // Firebase creates a cllectionRef object for us and then when we add documents to it then forebase will create both collecgtion and document in firestore.
  const collectionRef = firestore.collection(collectionKey);

  // Batch/ collect all requests and combine into a single batch
  const batch = firestore.batch();

  itemsToAdd.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });

  // commit() returns a promise which resoves to null if successfull
  return await batch.commit();
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Quering For Refrence Object from Firestore
  // We get Document Reference - used to check whether to include data or not
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Get a snapshot reference object
  const snapshot = await userRef.get();

  // snapshot.exists says whether user already present in database or not
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // we need to use refrence object for setting something in database
      // asynchronous function call so need to use await
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
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
