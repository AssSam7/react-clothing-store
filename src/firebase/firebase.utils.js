import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBGnACKq390D38rRiXtuo8Hd1yIx2k3hYg",
  authDomain: "react-clothing-store-b9124.firebaseapp.com",
  projectId: "react-clothing-store-b9124",
  storageBucket: "react-clothing-store-b9124.appspot.com",
  messagingSenderId: "293227146275",
  appId: "1:293227146275:web:e497c237b6840f7767d596",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
