import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA85SrkPh8fNLJXR3sJ1NmPUm2mgrSNEb4",
  authDomain: "monthly-tracker-13294.firebaseapp.com",
  projectId: "monthly-tracker-13294",
  storageBucket: "monthly-tracker-13294.appspot.com",
  messagingSenderId: "158438307344",
  appId: "1:158438307344:web:a3a98b6dccd8b17f72fc95",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const emailPasswordProvider = new firebase.auth.EmailAuthProvider();

export { auth, provider, emailPasswordProvider };
