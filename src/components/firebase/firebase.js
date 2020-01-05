import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAaQjBrEiTqu7qvcEQ2iOvFt4Cjf__2mTQ",
    authDomain: "your-travel-destination.firebaseapp.com",
    databaseURL: "https://your-travel-destination.firebaseio.com",
    projectId: "your-travel-destination",
    storageBucket: "your-travel-destination.appspot.com",
    messagingSenderId: "301738468152",
    appId: "1:301738468152:web:357c260487f968eb9f17cd",
    measurementId: "G-M86S2CSQX5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;