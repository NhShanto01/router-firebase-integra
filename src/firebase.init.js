// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARIpNOxkJkoc6Qk5iJqy6UrUVyVFweYww",
    authDomain: "router-firebase-integration01.firebaseapp.com",
    projectId: "router-firebase-integration01",
    storageBucket: "router-firebase-integration01.appspot.com",
    messagingSenderId: "167432469602",
    appId: "1:167432469602:web:ab67feb70c7a754093253b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;