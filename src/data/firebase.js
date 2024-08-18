// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-V8EDO72JdSLi27bOaOfJ0aNyj9wgNXs",
  authDomain: "proyect-final-mercadolibre.firebaseapp.com",
  projectId: "proyect-final-mercadolibre",
  storageBucket: "proyect-final-mercadolibre.appspot.com",
  messagingSenderId: "874968431872",
  appId: "1:874968431872:web:84d31951a6c64d63dc47e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

