import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import { Admin, Resource } from 'react-admin';
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccount');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://start-helping-app.firebaseio.com"
});

function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    admin.auth().listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
}

listAllUsers();



//
// admin.auth().getUserByEmail(email)
//     .then(function(userRecord) {
//         // See the UserRecord reference doc for the contents of userRecord.
//         console.log('Successfully fetched user data:', userRecord.toJSON());
//     })
//     .catch(function(error) {
//         console.log('Error fetching user data:', error);
//     });

// function listAllUsers(nextPageToken) {
//     // List batch of users, 1000 at a time.
//     admin.auth().listUsers(1000, nextPageToken)
//         .then(function(listUsersResult) {
//             listUsersResult.users.forEach(function(userRecord) {
//                 console.log('user', userRecord.toJSON());
//             });
//             if (listUsersResult.pageToken) {
//                 // List next batch of users.
//                 listAllUsers(listUsersResult.pageToken);
//             }
//         })
//         .catch(function(error) {
//             console.log('Error listing users:', error);
//         });
// }
// // Start listing users from the beginning, 1000 at a time.
// listAllUsers();

// function listAllUsers(nextPageToken) {
//     // List batch of users, 1000 at a time.
//     admin.auth().listUsers(1000, nextPageToken)
//         .then(function(listUsersResult) {
//             listUsersResult.users.forEach(function(userRecord) {
//                 console.log("user", userRecord.toJSON());
//             });
//             if (listUsersResult.pageToken) {
//                 // List next batch of users.
//                 listAllUsers(listUsersResult.pageToken)
//             }
//         })
//         .catch(function(error) {
//             console.log("Error listing users:", error);
//         });
// }
//
// listAllUsers();

// const getUserByEmail = (email) => {
//     firebaseAdmin
//         .auth()
//         .getUserByEmail(email)
//         .then(function(userRecord) {
//             // See the UserRecord reference doc for the contents of userRecord.
//             console.log('Successfully fetched user data:', userRecord.toJSON());
//         })
//         .catch(function(error) {
//             console.log('Error fetching user data:', error);
//         });
// };


class AdminPanel extends Component {

    componentDidMount() {
        listAllUsers();

    }

    render() {
        return (
            <div>
                <p>witaj, {sessionStorage.getItem("email")}</p>
                PANEL ADMINA
            </div>
        );
    }
}

export default AdminPanel;