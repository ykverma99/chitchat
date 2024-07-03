// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFwNfTc543WMEaDvZW_Odc9boREsJmIMo",
  authDomain: "fir-chitchat-6c2a9.firebaseapp.com",
  projectId: "fir-chitchat-6c2a9",
  storageBucket: "fir-chitchat-6c2a9.appspot.com",
  messagingSenderId: "318063649373",
  appId: "1:318063649373:web:503b6309f0ede9ac63a3b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
