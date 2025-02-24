import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBw05mrlVYrCtYtICv8B0txqvhKrnGF6o4",
    authDomain: "todo-webapp-998b8.firebaseapp.com",
    projectId: "todo-webapp-998b8",
    storageBucket: "todo-webapp-998b8.appspot.com",
    messagingSenderId: "709365544135",
    appId: "1:709365544135:web:38ed61e39cd6393b93bae2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
