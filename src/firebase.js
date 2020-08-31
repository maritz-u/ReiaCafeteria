import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCygxyzvWD5tmCN4CwaYLxg8EQY4hd-Dvo",
    authDomain: "cafeteriareia-6c8ba.firebaseapp.com",
    databaseURL: "https://cafeteriareia-6c8ba.firebaseio.com",
    projectId: "cafeteriareia-6c8ba",
    storageBucket: "cafeteriareia-6c8ba.appspot.com",
    messagingSenderId: "975228620531",
    appId: "1:975228620531:web:7b3026cff6c682b02ab186"
  };
  // Initialize Firebase
 const fb=  firebase.initializeApp(firebaseConfig);

 export const db= fb.firestore();
