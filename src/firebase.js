import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeQrJvDo64aCCnP4NxJoWBxb22jCEF8rY",
    authDomain: "gamering-50173.firebaseapp.com",
    projectId: "gamering-50173",
    storageBucket: "gamering-50173.appspot.com",
    messagingSenderId: "15518431901",
    appId: "1:15518431901:web:482319163b7c9535c0b274"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export { firebase };