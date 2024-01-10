// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoIRNkU4n9mKrqEVnNohQl7q10oY3vz9g",
  authDomain: "next-project-42499.firebaseapp.com",
  projectId: "next-project-42499",
  storageBucket: "next-project-42499.appspot.com",
  messagingSenderId: "498480556761",
  appId: "1:498480556761:web:31083ded86625ec6ffecc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;