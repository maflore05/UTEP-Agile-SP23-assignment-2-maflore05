import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTBrf76fk4FhRjTWuEeNvH0e2LXxsf5QI",
  authDomain: "flores-sandbox-60981.firebaseapp.com",
  projectId: "flores-sandbox-60981",
  storageBucket: "flores-sandbox-60981.appspot.com",
  messagingSenderId: "21171737965",
  appId: "1:21171737965:web:063277ce5c6b941d80b664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;