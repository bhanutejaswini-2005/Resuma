// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKps-jyntXKICSyVBSlyuF2aXn6RkAr1E",
  authDomain: "resumebuilder-c0af4.firebaseapp.com",
  projectId: "resumebuilder-c0af4",
  storageBucket: "resumebuilder-c0af4.appspot.com", 
  messagingSenderId: "1010030030711",
  appId: "1:1010030030711:web:99d39c4f28aacc4b5bfb72",
  measurementId: "G-STHKKJNH57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();