// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKct3s9R_3NmHh49mnZl1U_WcKcN1Nuo",
  authDomain: "attendance-management-sy-2b849.firebaseapp.com",
  projectId: "attendance-management-sy-2b849",
  storageBucket: "attendance-management-sy-2b849.appspot.com",
  messagingSenderId: "533410295224",
  appId: "1:533410295224:web:d339ea8ee080698bd4334d"
};

var email = prompt("Enter your email");
var password = prompt("Enter your password");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 

// 

getDoc(doc(db, "cities", "SF")).then(docSnap => {
    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    document.getElementById("data").innerHTML = docSnap.data().name;
    } else {
      console.log("No such document!");
    }
  })


    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });