// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv0vbCoAsxaYUsmDnaB40kJMx5FU2wnSQ",
  authDomain: "dragon-news-9c8f0.firebaseapp.com",
  projectId: "dragon-news-9c8f0",
  storageBucket: "dragon-news-9c8f0.appspot.com",
  messagingSenderId: "624839822474",
  appId: "1:624839822474:web:91e4057c352745fe03b173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;