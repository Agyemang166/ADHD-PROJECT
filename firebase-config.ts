import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBtBQhX12pBFPvbFU6ME6H_wOaNHYIazNw",
  authDomain: "adhd-101.firebaseapp.com",
  projectId: "adhd-101",
  storageBucket: "adhd-101.appspot.com",
  messagingSenderId: "560036982005",
  appId: "1:560036982005:web:f3fbb368bb618a2a41e9bc",
  measurementId: "G-693FWN9JWX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
