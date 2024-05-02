// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARTu0r08pQzrtb-gnICY5KK4UKYqVDF6c",
    authDomain: "nirman-coding-crusaders.firebaseapp.com",
    projectId: "nirman-coding-crusaders",
    storageBucket: "nirman-coding-crusaders.appspot.com",
    messagingSenderId: "407410474149",
    appId: "1:407410474149:web:6903fa52f3110288c6214c",
    measurementId: "G-TFTK20EP26"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;


