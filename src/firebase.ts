import firebase from 'firebase/app';
import 'firebase/auth';

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

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();