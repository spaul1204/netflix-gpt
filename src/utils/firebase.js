// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwEkoSrCz4BCGVir0EkfNpp6MV8ay_x8",
  authDomain: "netflixgpt-new-5af82.firebaseapp.com",
  projectId: "netflixgpt-new-5af82",
  storageBucket: "netflixgpt-new-5af82.appspot.com",
  messagingSenderId: "1009711215446",
  appId: "1:1009711215446:web:691f2f67e333c34eb29cf7",
  measurementId: "G-4DWT63K4J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);