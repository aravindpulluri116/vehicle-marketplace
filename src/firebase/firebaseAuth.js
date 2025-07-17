// src/firebase/firebaseAuth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";

import firebaseConfig from "./firebaseConfig";

// ✅ Initialize only once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Auth functions
const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

const logoutUser = () => signOut(auth);

export {
  db,
  auth,
  collection,
  getDocs,
  addDoc,
  registerUser,
  loginUser,
  resetPassword,
  logoutUser
};
