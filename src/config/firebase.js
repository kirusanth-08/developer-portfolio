import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-sLXXmVizgz2Ly9gnMaJfu3XXfAjIcQc",
  authDomain: "developer-portfolio-2daab.firebaseapp.com",
  projectId: "developer-portfolio-2daab",
  storageBucket: "developer-portfolio-2daab.firebasestorage.app",
  messagingSenderId: "1073543831740",
  appId: "1:1073543831740:web:c8a47e00683a501d2bb0b9",
  measurementId: "G-B1W3JW7XZP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;