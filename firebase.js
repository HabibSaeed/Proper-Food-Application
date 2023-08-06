import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAEfmfXbOGnzrBgv_08FZNUjzPM_ga1Mk",
    authDomain: "todo-project-19a2a.firebaseapp.com",
    projectId: "todo-project-19a2a",
    storageBucket: "todo-project-19a2a.appspot.com",
    messagingSenderId: "2847894668",
    appId: "1:2847894668:web:4bebc9500b051bb5731fa9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
    db,
    auth,
}

