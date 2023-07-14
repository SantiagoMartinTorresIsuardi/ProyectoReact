// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlEz3SwF9SiHlXJtLbtoHIZ9k3YXfLCnU",
  authDomain: "proyectocoder-d6135.firebaseapp.com",
  projectId: "proyectocoder-d6135",
  storageBucket: "proyectocoder-d6135.appspot.com",
  messagingSenderId: "726736738495",
  appId: "1:726736738495:web:d0dc64102f5500b2520e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db= getFirestore(app)