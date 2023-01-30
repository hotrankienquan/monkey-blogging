import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBubBTYajMFtdEPjcsTHc7zOf7SJDsYOCk",
  authDomain: "monkey-blog-5aff7.firebaseapp.com",
  projectId: "monkey-blog-5aff7",
  storageBucket: "monkey-blog-5aff7.appspot.com",
  messagingSenderId: "665041363036",
  appId: "1:665041363036:web:3d97392f9cfa6555860699"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
