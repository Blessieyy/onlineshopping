
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnrLS09uQ4-xUw1md3lvzCTPxKCiGwUz4",
  authDomain: "ecommerce-804e0.firebaseapp.com",
  projectId: "ecommerce-804e0",
  storageBucket: "ecommerce-804e0.firebasestorage.app",
  messagingSenderId: "39394992563",
  appId: "1:39394992563:web:64d7ca41a04fe8118febc6",
  measurementId: "G-0QZMZS1WTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);