// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "globlog-fe743.firebaseapp.com",
  projectId: "globlog-fe743",
  storageBucket: "globlog-fe743.firebasestorage.app",
  messagingSenderId: "232106438108",
  appId: "1:232106438108:web:c3e7930b787675f4e7b319"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);