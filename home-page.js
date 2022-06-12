import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "./config.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

var roll = localStorage.getItem("roll")
var email = localStorage.getItem("email")
var password = localStorage.getItem("password")

window.onbeforeunload = function() { 
    var leave = confirm("Do you want to Logout?");
    if(leave){
        localStorage.clear();
        location.replace('./index.html');
    }
};

document.getElementById("logout").addEventListener("click", () =>{
    var leave = confirm("Do you want to Logout?");
    if(leave){
        localStorage.clear();
        location.replace('./index.html');
    }
})

window.onload = signInWithEmailAndPassword(auth, email, password) 
    .then((userCredential) => {
        window.onload = getDoc(doc(db, "Users", `${roll}`)).then(docSnap => {
            if (docSnap.exists()) {
                document.getElementById("student-name").innerHTML = docSnap.data().Name;
                document.getElementById("roll").innerHTML = docSnap.data().ID;
                document.getElementById("role").innerHTML = docSnap.data().Role;
            } else {
            console.log("No such document!");
            }
        })

    
    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage) 
    });

const numb = document.getElementById('disp-number');
let counter = 0;
window.onload = setInterval(() => {
        //change here
    var stdAttendance = 10

    if(stdAttendance >= 75){
        document.getElementsByClassName("progress")[0].style.backgroundColor = "green"
        document.getElementsByClassName('progress')[1].style.backgroundColor = "green"
    }

    else if(stdAttendance < 75 && stdAttendance >= 50){
        document.getElementsByClassName("progress")[0].style.backgroundColor = "#fc6f03"
        document.getElementsByClassName('progress')[1].style.backgroundColor = "#fc6f03"
    }

    else if(stdAttendance < 50){
        document.getElementsByClassName("progress")[0].style.backgroundColor = "red"
        document.getElementsByClassName('progress')[1].style.backgroundColor = "red"
    }

    if(counter == stdAttendance){
        clearInterval();
        document.getElementsByClassName('progress')[0].style.animationPlayState = 'paused';
        document.getElementsByClassName('progress')[1].style.animationPlayState = 'paused';
        return
    }else{
        counter+=1;
        numb.innerHTML = counter + "%";
    }
}, 80);