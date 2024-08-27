// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-cec78.firebaseapp.com",
  projectId: "blog-cec78",
  storageBucket: "blog-cec78.appspot.com",
  messagingSenderId: "118858306329",
  appId: "1:118858306329:web:3cc50470542fe82385eb88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
