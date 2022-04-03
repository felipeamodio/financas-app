import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBsAd4cmkzgGytmNq7gRRPu6BTgYll5K3I",
    authDomain: "financas-e7a26.firebaseapp.com",
    projectId: "financas-e7a26",
    storageBucket: "financas-e7a26.appspot.com",
    messagingSenderId: "924973440667",
    appId: "1:924973440667:web:cba5701a1cb03e2d91303e",
    measurementId: "G-R3ZHL89N3T"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;