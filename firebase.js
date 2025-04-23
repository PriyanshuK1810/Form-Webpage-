import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCm0KIX9eTSiX8RSLymoXUzBiHL6T6tkZY",
    authDomain: "backend1-5f33e.firebaseapp.com",
    projectId: "backend1-5f33e",
    storageBucket: "backend1-5f33e.firebasestorage.app",
    messagingSenderId: "1027712141441",
    appId: "1:1027712141441:web:f4770742a892b2110ea580",
    measurementId: "G-9K30TT0EGT",
    databaseURL: "https://backend1-5f33e-default-rtdb.firebaseio.com/",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const database = getDatabase(app);
export const provider = new GoogleAuthProvider();
auth.languageCode = 'en'
export { app }