import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA1Hxkv050ygwWNSOLXOV-5QS76UEQD8kY",
  authDomain: "example-crud-user-react-native.firebaseapp.com",
  projectId: "example-crud-user-react-native",
  storageBucket: "example-crud-user-react-native.appspot.com",
  messagingSenderId: "150120152772",
  appId: "1:150120152772:web:3e578b6c01938348325391"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
