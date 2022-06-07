const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCRzJObXCFbh7UX5Jv0Bt9OPWbeL1rjqRU",
    authDomain: "attendance-management-sy-88c13.firebaseapp.com",
    projectId: "attendance-management-sy-88c13",
    storageBucket: "attendance-management-sy-88c13.appspot.com",
    messagingSenderId: "357470586272",
    appId: "1:357470586272:web:16bf259c30a5c6118e10c5"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();