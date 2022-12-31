// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATFDMUPtXKyks0X71gDWPkat2Cd9upNFI",
  authDomain: "condorstores.firebaseapp.com",
  projectId: "condorstores",
  storageBucket: "condorstores.appspot.com",
  messagingSenderId: "1009419931451",
  appId: "1:1009419931451:web:fc0d84a09f99d1382bb11e",
  measurementId: "G-WG44T7LEGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);