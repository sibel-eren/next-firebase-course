import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXCyuurIAegv6leV3K5os1L7wXFiWGz0o",
  authDomain: "next-firebase-course-149b9.firebaseapp.com",
  projectId: "next-firebase-course-149b9",
  storageBucket: "next-firebase-course-149b9.appspot.com",
  messagingSenderId: "120406636682",
  appId: "1:120406636682:web:4697b81d38f5aa2ed31573",
  measurementId: "G-6X6G0MHC4Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();