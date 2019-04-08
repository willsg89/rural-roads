import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbh-Jlc9sDCceO2wHNs6siNhMNq6Y7ANs",
  authDomain: "rural-roads-b2d06.firebaseapp.com",
  databaseURL: "https://rural-roads-b2d06.firebaseio.com",
  projectId: "rural-roads-b2d06",
  storageBucket: "rural-roads-b2d06.appspot.com",
  messagingSenderId: "969111788898",
  appId: "1:969111788898:web:9e08c1f4f172980980203b",
  measurementId: "G-Q1DDP0PL2Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
