// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4-DlGqjCAWpeWTMSrYVCd4ab0RwJvQc",
  authDomain: "chatter-391319.firebaseapp.com",
  projectId: "chatter-391319",
  storageBucket: "chatter-391319.appspot.com",
  messagingSenderId: "222605656405",
  appId: "1:222605656405:web:51d581cef81f87953e2fdc",
  measurementId: "G-E0N4WKLCGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
