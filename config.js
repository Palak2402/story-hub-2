import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDb1DJwqT94snuE2SUe1fidMJm455LMXXM",
    authDomain: "newsletter-f7c9c.firebaseapp.com",
    databaseURL: "https://newsletter-f7c9c-default-rtdb.firebaseio.com",
    projectId: "newsletter-f7c9c",
    storageBucket: "newsletter-f7c9c.appspot.com",
    messagingSenderId: "265502497856",
    appId: "1:265502497856:web:63f269a9097cc9817b93a5"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   