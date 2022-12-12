import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
import { initializeApp } from 'firebase/app';

// Replace this with the config for your own Firebase project
const firebaseConfig = {
  apiKey: "???",
  authDomain: "???.firebaseapp.com",
  databaseURL: "https://???.firebaseio.com",
  projectId: "???",
  storageBucket: "???.appspot.com",
  messagingSenderId: "???",
  appId: "???"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
