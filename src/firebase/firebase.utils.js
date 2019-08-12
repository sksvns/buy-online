import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC3mKkBgpp4Gk-AyLEwQPlPCxVlDF7MweE",
    authDomain: "buy-online-db.firebaseapp.com",
    databaseURL: "https://buy-online-db.firebaseio.com",
    projectId: "buy-online-db",
    storageBucket: "",
    messagingSenderId: "1019016054999",
    appId: "1:1019016054999:web:921b08aa4d58971d"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const SignInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;
  