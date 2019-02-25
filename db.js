import firebase from 'firebase'
import 'firebase/firestore'
const config = {
  apiKey: "AIzaSyBEwTOEO1HF5rXaxV9cGdR3-7B0RNzaJ1o",
  authDomain: "newproject-d4b87.firebaseapp.com",
  databaseURL: "https://newproject-d4b87.firebaseio.com",
  projectId: "newproject-d4b87",
  storageBucket: "newproject-d4b87.appspot.com",
  messagingSenderId: "447445225339"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db