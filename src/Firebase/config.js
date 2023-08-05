import firebase from "firebase/app"     //you always have to import this to use firebase
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-kRLhrk1V443tSVXk3polWgRfGmLyjSc",
    authDomain: "fir-vue-f1bdc.firebaseapp.com",
    projectId: "fir-vue-f1bdc",
    storageBucket: "fir-vue-f1bdc.appspot.com",
    messagingSenderId: "254218786747",
    appId: "1:254218786747:web:674b7add26a4fb03d3169e",
    measurementId: "G-MXMYYSSR3L"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firebase.firestore()

  export { projectFirestore }