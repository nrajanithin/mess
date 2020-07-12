import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyADvLBGCqFZt1GLiF9dFhTDLWC-j2V-pDI",
    authDomain: "chatting-abca4.firebaseapp.com",
    databaseURL: "https://chatting-abca4.firebaseio.com",
    projectId: "chatting-abca4",
    storageBucket: "chatting-abca4.appspot.com",
    messagingSenderId: "253470832199",
    appId: "1:253470832199:web:be4042475c1aed45dca362"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);
export default fire;