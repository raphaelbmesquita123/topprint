import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAYY17n6F8SqUJOKVNBF0usQCJXsrnenWE',
  authDomain: "topprint-8afc5.firebaseapp.com",
  projectId: "topprint-8afc5",
  storageBucket: "topprint-8afc5.appspot.com",
  messagingSenderId: "1029629940933",
  appId: "1:1029629940933:web:321efd672c86f6351c0cac",
  measurementId: "G-YGB2NBPTKH"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
