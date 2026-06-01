// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD7_AUz0ibwJBVSlf8-3a9ItGruT7qa4s",
  authDomain: "todo-61f1a.firebaseapp.com",
  projectId: "todo-61f1a",
  storageBucket: "todo-61f1a.firebasestorage.app",
  messagingSenderId: "47054336573",
  appId: "1:47054336573:web:47d9ac2202d53e44927054",
  measurementId: "G-JMF5XW5Z4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);