// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDok3iSnO84iLWfHGjnrXri_aCchgSMYX8",
  authDomain: "everflow-7cc5a.firebaseapp.com",
  projectId: "everflow-7cc5a",
  storageBucket: "everflow-7cc5a.firebasestorage.app",
  messagingSenderId: "1023546517308",
  appId: "1:1023546517308:web:b294f83a1a94a0f4f66039",
  measurementId: "G-SDXXJ55L18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app)
