import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFKct3s9R_3NmHh49mnZl1U_WcKcN1Nuo",
  authDomain: "attendance-management-sy-2b849.firebaseapp.com",
  projectId: "attendance-management-sy-2b849",
  storageBucket: "attendance-management-sy-2b849.appspot.com",
  messagingSenderId: "533410295224",
  appId: "1:533410295224:web:d339ea8ee080698bd4334d"
};

export  {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword};