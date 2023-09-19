import { initializeApp } from "firebase/app";

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FBASE_APIKEY}`,
  authDomain: `${import.meta.env.VITE_FBASE_AUTH_DOMAIN}`,
  projectId: "seedlingsbymwalim",
  storageBucket: `${import.meta.env.VITE_FBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FBASE_APP_ID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
