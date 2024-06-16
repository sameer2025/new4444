// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4v68_Ohl_pjHeSWmDC0ky65AcI9EdzKA",
  authDomain: "register-form-7255f.firebaseapp.com",
  databaseURL: "https://register-form-7255f-default-rtdb.firebaseio.com",
  projectId: "register-form-7255f",
  storageBucket: "register-form-7255f.appspot.com",
  messagingSenderId: "182874977751",
  appId: "1:182874977751:web:c6841663c6d7769edfc792",
  measurementId: "G-7N02B4267T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
