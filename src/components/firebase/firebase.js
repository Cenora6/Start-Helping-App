import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDQ7IP4NYTrzVoKnxSUc7cX5MOdq7ywnSA",
    authDomain: "start-helping-app.firebaseapp.com",
    databaseURL: "https://start-helping-app.firebaseio.com",
    projectId: "start-helping-app",
    storageBucket: "start-helping-app.appspot.com",
    messagingSenderId: "965137549147",
    appId: "1:965137549147:web:1abe9b8c9e316c6ec53c7e"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    addDonation = () => this.db.collection('donations');

}
export default Firebase;
