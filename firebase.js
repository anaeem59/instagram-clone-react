// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0War0KvIm-Ve4cubmYTCuR6QMavyYCOo",
    authDomain: "instagram-clone-855d8.firebaseapp.com",
    projectId: "instagram-clone-855d8",
    storageBucket: "instagram-clone-855d8.appspot.com",
    messagingSenderId: "498471822480",
    appId: "1:498471822480:web:31c6bb24267f7e5b5be415",
    measurementId: "G-SLKQZMSMZ0"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export {db, auth, storage};