// =============================================
// AttendGuard — Shared Firebase Configuration
// =============================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKyekYbod_thAUnYxTecKYHFjHhYxBNI4",
  authDomain: "attendguard.firebaseapp.com",
  databaseURL: "https://attendguard-default-rtdb.firebaseio.com",
  projectId: "attendguard",
  storageBucket: "attendguard.appspot.com",
  messagingSenderId: "551150928724",
  appId: "1:551150928724:web:ac7efb990b3dcdf470bec1",
  measurementId: "G-XGX022B0V2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
