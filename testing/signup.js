import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "./config.js";


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