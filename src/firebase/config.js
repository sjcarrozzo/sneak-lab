import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDXO5D0SObsbgUVEM92ytkh9RdpFL9F9M",
  authDomain: "sneak-lab-db.firebaseapp.com",
  projectId: "sneak-lab-db",
  storageBucket: "sneak-lab-db.firebasestorage.app",
  messagingSenderId: "882435403827",
  appId: "1:882435403827:web:a32ad38b30ccdb7ba03346",
};

export const app = initializeApp(firebaseConfig);
