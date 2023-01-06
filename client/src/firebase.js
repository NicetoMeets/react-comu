// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNBlSivAzzSXQTfbZQVH-gq4K_d1UOJB0",
    authDomain: "react-community-18476.firebaseapp.com",
    projectId: "react-community-18476",
    storageBucket: "react-community-18476.appspot.com",
    messagingSenderId: "202598015610",
    appId: "1:202598015610:web:545b32fd154648195b51c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase