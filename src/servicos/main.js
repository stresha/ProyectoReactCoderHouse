
import { initializeApp } from "firebase/app";
import  { getFirestore}  from  "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAXI06HKce9ytgWwftsnZPnisKAEsRe0sM",
  authDomain: "back-benitoreact.firebaseapp.com",
  projectId: "back-benitoreact",
  storageBucket: "back-benitoreact.appspot.com",
  messagingSenderId: "818767026804",
  appId: "1:818767026804:web:0187579c1d584853e98f21"
};


const app = initializeApp(firebaseConfig);

 export const  firestoreDb = getFirestore(app)