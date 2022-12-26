// // Import the functions you need from the SDKs you need
// ///import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = {
//   apiKey: "AIzaSyB5UPP36Va_TQRdX41Tny6PlAx72Vit8BU",
//   authDomain: "yellow-page-9662e.firebaseapp.com",
//   projectId: "yellow-page-9662e",
//   storageBucket: "yellow-page-9662e.appspot.com",
//   messagingSenderId: "794908722141",
//   appId: "1:794908722141:web:c89ef1291b8af35de26c34",
//   measurementId: "G-S9J9TZNLVW"
// };

// // Initialize Firebase
// firebase.initializeApp(config);
// // const analytics = getAnalytics(app);
// export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB5UPP36Va_TQRdX41Tny6PlAx72Vit8BU",
  authDomain: "yellow-page-9662e.firebaseapp.com",
  projectId: "yellow-page-9662e",
  storageBucket: "yellow-page-9662e.appspot.com",
  messagingSenderId: "794908722141",
  appId: "1:794908722141:web:c89ef1291b8af35de26c34",
  measurementId: "G-S9J9TZNLVW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
export {auth , firebase}
  
//export default firebase