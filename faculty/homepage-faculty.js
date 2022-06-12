import {firebaseConfig, initializeApp, getAuth, createUserWithEmailAndPassword, getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc, signInWithEmailAndPassword} from "../config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

// const querySnapshot = await getDocs(collection(db, "Users"));
// var i = 0
// querySnapshot.forEach((doc) => {
//     if(doc.data().Role == "Student"){
//         var div = document.getElementsByClassName('select-roll')
//         document.getElementsByClassName("bClick")[0].addEventListener("click", function(){
//             alert("clicked")
//             let newButton = document.createElement("button");
//             newButton.setAttribute("class", "list");
//             newButton.innerText = `${doc.data().ID}`;
//             div[i](newButton);
//         })
//         i++
//     }
// });

var ids = []

const querySnapshot =  await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
        if(doc.data().Role == "Student"){
            ids.push(doc.data().ID)
        }
    })

console.log(ids)

document.getElementsByClassName('bClick')[0].addEventListener("click", ()=>{
    for(let i = 0; i < ids.length; i++){
        let newButton = document.createElement("button");
        newButton.setAttribute("class", "list");
        newButton.innerText = `${ids[i]}`;
        document.getElementById("select-roll").appendChild(newButton);
    }

})
