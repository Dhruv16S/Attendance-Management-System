import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "../config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

window.onload = getDoc(doc(db, "Users", `${localStorage.getItem("roll")}`)).then(docSnap => {
    if (docSnap.exists()) {
        document.getElementById("student-name").innerHTML = docSnap.data().Name;
        document.getElementById("roll").innerHTML = docSnap.data().ID;
        document.getElementById("role").innerHTML = docSnap.data().Role;
    } else {
    console.log("No such document!");
    }
})

document.getElementById("logout").addEventListener("click", () =>{
    var leave = confirm("Do you want to Logout?");
    if(leave){
        localStorage.clear();
        location.replace('../index.html');
    }
})

var ids = []

const querySnapshot =  await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
        if(doc.data().Role == "Student"){
            ids.push(doc.data().ID)
        }
    })


document.getElementsByClassName('bClick')[0].addEventListener("click", ()=>{
    document.getElementById("selectedClass").innerHTML= "C1 - II Year" ;
    for(let i = 0; i < ids.length; i++){
        let newButton = document.createElement("button");
        newButton.setAttribute("class", "list");
        newButton.innerText = `${ids[i]}`;
        document.getElementById("select-roll").appendChild(newButton);
    }
})
