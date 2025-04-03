// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdjszRyi-KtP_HiKBatX1blNsXVTeImf4",
  authDomain: "vaishnavi-portfolio.firebaseapp.com",
  projectId: "vaishnavi-portfolio",
  storageBucket: "vaishnavi-portfolio.appspot.com", // ✅ Corrected here
  messagingSenderId: "1053252551622",
  appId: "1:1053252551622:web:39737980ba2cd2f55968c7",
  measurementId: "G-X09DHNF72T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);