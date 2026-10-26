
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCgF1BzUjKR4jfWHO85HCB391_bcqKHG2o",
  authDomain: "learningfirebase-86b28.firebaseapp.com",
  projectId: "learningfirebase-86b28",
  storageBucket: "learningfirebase-86b28.firebasestorage.app",
  messagingSenderId: "880892161466",
  appId: "1:880892161466:web:742c95970b035c29f30183",
  measurementId: "G-3RFHFT0JNE",
  databaseURL:"https://learningfirebase-86b28-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);