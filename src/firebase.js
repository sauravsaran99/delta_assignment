// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQPQQ5QqXXCQuHMCEZKQ0UD7v6Hrpu9hQ",
  authDomain: "delta-136cf.firebaseapp.com",
  projectId: "delta-136cf",
  storageBucket: "delta-136cf.appspot.com",
  messagingSenderId: "1018661481245",
  appId: "1:1018661481245:web:bf8c88bb4e473ec4fd4ff4",
  measurementId: "G-JYS420X31R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}