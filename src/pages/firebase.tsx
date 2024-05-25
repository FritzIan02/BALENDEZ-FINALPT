// src/firebase.tsx
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdOgyyNx6JECffiBMi-8sRQ1vRiRQmYRw",
  authDomain: "fir-auth-2c93e.firebaseapp.com",
  projectId: "fir-auth-2c93e",
  storageBucket: "fir-auth-2c93e.appspot.com",
  messagingSenderId: "664069650855",
  appId: "1:664069650855:web:27f065f6ab924a1c6cde82",
  measurementId: "G-GBV3E4X5JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances

