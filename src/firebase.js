// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrD2yPf6PqwSap1OndXcrzCzVLrkL4Tm0",
  authDomain: "todo-app-yt-a35d9.firebaseapp.com",
  projectId: "todo-app-yt-a35d9",
  storageBucket: "todo-app-yt-a35d9.appspot.com",
  messagingSenderId: "46452597394",
  appId: "1:46452597394:web:226f7302167ac31f40fc4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)