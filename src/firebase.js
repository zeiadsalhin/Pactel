import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmLaU2KnXRpb8PmN6hy_XrUg5JC9HaQf0",
    authDomain: "pactel-d4bda.firebaseapp.com",
    projectId: "pactel-d4bda",
    storageBucket: "pactel-d4bda.appspot.com",
    messagingSenderId: "429578084546",
    appId: "1:429578084546:web:4ef33b1a21098854e71b5b",
    measurementId: "G-H7DCK8J64M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()

export { projectFirestore }
export { firebase }