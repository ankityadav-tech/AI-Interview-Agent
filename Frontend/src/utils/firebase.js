import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-1a1f8.firebaseapp.com",
    projectId: "interviewiq-1a1f8",
    storageBucket: "interviewiq-1a1f8.firebasestorage.app",
    messagingSenderId: "867678203019",
    appId: "1:867678203019:web:558d768ab73d29f33a388e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };