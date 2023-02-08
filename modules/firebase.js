// initialise firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";  
// Adding more functions
//import { getFirestore, getDocs, collection, doc, setDoc, getDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getFirestore, collectionGroup, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB7a14Awf_9waP3d2ZX06o4efjUtwzfHA",
  authDomain: "stage-409cd.firebaseapp.com",
  projectId: "stage-409cd",
  storageBucket: "stage-409cd.appspot.com",
  messagingSenderId: "353769465240",
  appId: "1:353769465240:web:cf1b387bf2e09ffe79f7ed",
  measurementId: "G-526YGCVVN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporting more functions
export {app, db, getFirestore, collectionGroup, doc, getDoc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, orderBy}
//export { app, db, getDocs, collection, doc, setDoc, getDoc, query, where, orderBy }