import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCAIE9ta4Cac6MOiOYxnjMb5fWhqWAGEVE",
  authDomain: "apptwo-aedb7.firebaseapp.com",
  databaseURL: "https://apptwo-aedb7.firebaseio.com",
  projectId: "apptwo-aedb7",
  storageBucket: "apptwo-aedb7.appspot.com",
  messagingSenderId: "878654141264"
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;
