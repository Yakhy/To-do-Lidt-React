import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEJN5mQKMDGGwtzyGBiDB4aZGS6wM0oaA",
  authDomain: "todo-3f2d5.firebaseapp.com",
  projectId: "todo-3f2d5",
  storageBucket: "todo-3f2d5.appspot.com",
  messagingSenderId: "966676907437",
  appId: "1:966676907437:web:07f94cd978c8527038cd24"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
