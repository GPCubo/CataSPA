// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAedYqLFOq6C8mOLTSsm6FDGeT5mNPS4",
  authDomain: "masterclassesla-6bed2.firebaseapp.com",
  projectId: "masterclassesla-6bed2",
  storageBucket: "masterclassesla-6bed2.appspot.com",
  messagingSenderId: "215648530551",
  appId: "1:215648530551:web:ffcb5d76452a7aecedd672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;