// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4zoSX2p3ep_w63cCXXS1qIZETSdRmQs",
  authDomain: "chat-app-react-firebase-74e10.firebaseapp.com",
  projectId: "chat-app-react-firebase-74e10",
  storageBucket: "chat-app-react-firebase-74e10.appspot.com",
  messagingSenderId: "551804259317",
  appId: "1:551804259317:web:52278fedce255a8959aebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();