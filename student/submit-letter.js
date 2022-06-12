import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "../config.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

document.getElementById("submit-letter").addEventListener("click", () =>{
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var time = document.getElementById("time").value;
    var branch = document.getElementById("branch").value;
    var reason = document.getElementById("reason").value;
    var studentRoll = localStorage.getItem("ID");

        window.onload = getDoc(doc(db, "Class Details", `${localStorage.getItem("sClass")}`)).then(docSnap => {
        if (docSnap.exists()) {
        setDoc(doc(db, `/Class Details/${localStorage.getItem("sClass")}`), {
                ID : `${studentRoll}`,
                Permissions : `${reason}`
            });
        } else {
        console.log("No such document!");
        }
    })
})