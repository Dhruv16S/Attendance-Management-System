import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "./config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();


var attempt = 3, roll, email, password; 

document.getElementById("login")?.addEventListener('click', ()=>{
    var roll = document.getElementById("roll").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("roll", roll);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    window.onload = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        location.replace('./home-page.html');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        attempt--;
        if( attempt == 0){
            document.getElementById("roll").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("login").disabled = true;
            return false;
        }
    });
})

// export const details = () =>{
//     return({
//         roll : roll,
//         email : email,
//         password : password
//     })
// }







