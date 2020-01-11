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
    doSignOut = () => this.auth.signOut();

    //addHistory = (places, email) => {
    //
    //     places.forEach( name => {
    //         firebase.firestore().collection("history").add({
    //             place: name,
    //             email: email
    //         })
    //             .then(function(docRef) {
    //                 console.log("Document written with ID: ", docRef.id);
    //             })
    //             .catch(function(error) {
    //                 console.error("Error adding document: ", error);
    //             });
    //     })

    addDonation = (donation, email) =>
        this.db.collection("donations").add({
            donation: donation,
            email: email,
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

}

export default Firebase;
