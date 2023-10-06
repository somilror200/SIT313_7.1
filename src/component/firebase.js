import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMJDa27x0oJbfF16_6pQ2qHtNdBK1zEq8",
  authDomain: "sit313-7-1.firebaseapp.com",
  projectId: "sit313-7-1",
  storageBucket: "sit313-7-1.appspot.com",
  messagingSenderId: "213659733969",
  appId: "1:213659733969:web:4b5218fb10389cd25a9af0",
  measurementId: "G-XM6866XHLH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};