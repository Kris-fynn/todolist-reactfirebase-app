import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNIgeHixOuTDEG0MnYC6yMJ5Q3UcFcvZI",
  authDomain: "todolist-app-f5e2f.firebaseapp.com",
  databaseURL: "https://todolist-app-f5e2f-default-rtdb.firebaseio.com",
  projectId: "todolist-app-f5e2f",
  storageBucket: "todolist-app-f5e2f.appspot.com",
  messagingSenderId: "956326486103",
  appId: "1:956326486103:web:92c924b662f6da3a038312",
  measurementId: "G-LNHG2BC8FD"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
