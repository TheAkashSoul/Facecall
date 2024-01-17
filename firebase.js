// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnxe4y8PAgH6srnnA1w2T4FrQuboAo1T8",
  authDomain: "videomeet-9f866.firebaseapp.com",
  projectId: "videomeet-9f866",
  storageBucket: "videomeet-9f866.appspot.com",
  messagingSenderId: "565045538389",
  appId: "1:565045538389:web:dd1b01f4b47a19fe0d2edc",
  measurementId: "G-ZWERWM5TKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
