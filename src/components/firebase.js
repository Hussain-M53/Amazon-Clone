import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYc55UeTzLzl2uP9ooYK92UoWoTlD7qS4",
  authDomain: "my-app-323be.firebaseapp.com",
  projectId: "my-app-323be",
  storageBucket: "my-app-323be.appspot.com",
  messagingSenderId: "269845970615",
  appId: "1:269845970615:web:59bf486d60f7efedcad732",
  measurementId: "G-6VEEN5CES6"
});

 const db =firebaseApp.firestore();
 const auth = firebase.auth();
 export {db,auth}