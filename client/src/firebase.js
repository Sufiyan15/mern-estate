// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dd418.firebaseapp.com",
  projectId: "mern-estate-dd418",
  storageBucket: "mern-estate-dd418.appspot.com",
  messagingSenderId: "844957757491",
  appId: "1:844957757491:web:3de3a36d1fb8c11865b346",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
