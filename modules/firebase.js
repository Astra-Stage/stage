// initialise firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  updateDoc,
  deleteField,
  deleteDoc, //new function
  addDoc,
  arrayUnion,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjBsOlAtw1cmuV0Iu-rBql-9GF02Gktw",
  authDomain: "stage2-7ef83.firebaseapp.com",
  projectId: "stage2-7ef83",
  storageBucket: "stage2-7ef83.appspot.com",
  messagingSenderId: "1028289646661",
  appId: "1:1028289646661:web:35458ef8be46076274532c",
  measurementId: "G-0N3R0PR6H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  getAuth,
  getDocs,
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateDoc,
  deleteField,
  deleteDoc,
  getStorage,
  sRef,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  arrayUnion,
  uploadBytes,
};
