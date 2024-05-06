// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQNY03M8FyA2RdzbitwysUDTJz0HVPCoc",
  authDomain: "almera-422516.firebaseapp.com",
  projectId: "almera-422516",
  storageBucket: "almera-422516.appspot.com",
  messagingSenderId: "754917262804",
  appId: "1:754917262804:web:5a159059e7930b65690241",
  measurementId: "G-FRGM3T4MKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
