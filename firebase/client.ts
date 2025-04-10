
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPbHB5JWH9Itz2V0Ka9TMRwWULExt82zc",
  authDomain: "prepwise-b8ce4.firebaseapp.com",
  projectId: "prepwise-b8ce4",
  storageBucket: "prepwise-b8ce4.firebasestorage.app",
  messagingSenderId: "945579386262",
  appId: "1:945579386262:web:14b4f9b4886c82483ee9b7",
  measurementId: "G-NZSE16P89Q"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)