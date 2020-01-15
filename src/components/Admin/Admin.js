import React, {Component} from 'react';
import { Admin } from 'react-admin';
import fundations from './../database/organizations'

class AdminPanel extends Component {

    // componentDidMount() {
    //     this.getDataDonation();
    //
    //     //admin.auth().getUser(uid)
    //     //   .then(function(userRecord) {
    //     //     // See the UserRecord reference doc for the contents of userRecord.
    //     //     console.log('Successfully fetched user data:', userRecord.toJSON());
    //     //   })
    //     //   .catch(function(error) {
    //     //     console.log('Error fetching user data:', error);
    //     //   });
    // }

    render() {
        return (
            <div>



            </div>
        )
    }
}

// const dataProvider = fundations;
//
// const Admin = () => <Admin dataProvider={dataProvider} />;


export default Admin;