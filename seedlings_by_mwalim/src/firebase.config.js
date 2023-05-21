import { initializeApp } from "firebase/app";

// The web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFF-GiVDwL-PpmXoQyncze3Tve1lhzVoA",
    authDomain: "seedlingsbymwalim.firebaseapp.com",
    projectId: "seedlingsbymwalim",
    storageBucket: "seedlingsbymwalim.appspot.com",
    messagingSenderId: "1039226264985",
    appId: "1:1039226264985:web:f093609fc68ad92a6a0708"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);