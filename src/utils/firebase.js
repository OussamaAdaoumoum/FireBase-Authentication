// src/utils/firebase.js
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcyCKUHIflDPkJ3E-J-7rTLeA3ThcB0Ik",
  authDomain: "fir-authentication-4c3e4.firebaseapp.com",
  projectId: "fir-authentication-4c3e4",
  storageBucket: "fir-authentication-4c3e4.appspot.com",
  messagingSenderId: "619563125433",
  appId: "1:619563125433:web:62f94b3669fb03e24c2968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;