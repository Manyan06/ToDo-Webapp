// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBw05mrlVYrCtYtICv8B0txqvhKrnGF6o4",
    authDomain: "todo-webapp-998b8.firebaseapp.com",
    projectId: "todo-webapp-998b8",
    storageBucket: "todo-webapp-998b8.appspot.com",
    messagingSenderId: "709365544135",
    appId: "1:709365544135:web:38ed61e39cd6393b93bae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign Up
document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign Up Successful!");
            window.location.href = "index.html"; // Redirect to To-Do List
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Handle Login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to To-Do List
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Handle Logout (You can place this in `index.js`)
export function logoutUser() {
    signOut(auth).then(() => {
        alert("Logged Out!");
        window.location.href = "auth.html";
    }).catch((error) => {
        alert(error.message);
    });
}
