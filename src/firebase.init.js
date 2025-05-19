import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRnXxqNaVrcIyxtcFoitpnII69ehqXUfY",
  authDomain: "coffee-store-8c21e.firebaseapp.com",
  projectId: "coffee-store-8c21e",
  storageBucket: "coffee-store-8c21e.firebasestorage.app",
  messagingSenderId: "636097384760",
  appId: "1:636097384760:web:165e425593a68260edf1cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
