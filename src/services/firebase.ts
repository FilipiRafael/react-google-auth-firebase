import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBplNxBHimn_B2EzmsYHDbGeJUPAtr3aAI",
  authDomain: "auth-rocketseat-de9b6.firebaseapp.com",
  projectId: "auth-rocketseat-de9b6",
  storageBucket: "auth-rocketseat-de9b6.appspot.com",
  messagingSenderId: "670601957634",
  appId: "1:670601957634:web:9227b93ceaf52858f8b21b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);