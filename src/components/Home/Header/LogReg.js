import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withFirebase} from "../../firebase/context";

const logOutStyle = {
    textDecoration: "none",
    paddingLeft: "1rem",
    opacity: "0.5",
    color: "#000",
};

const SignOutButton = ( firebase ) => (
    <Link to='/wylogowano' style={logOutStyle} onClick={firebase.doSignOut} >
        <span className='hoverLink'>Wyloguj</span>
    </Link>
);

const SignOutBut = withFirebase(SignOutButton);

class LogReg extends Component {

    // logOut = (e) => {
    //     e.preventDefault();
    //     firebase
    //         .doSignOut()
    //         .then(() =>
    //             console.log("wylogowano!")
    //         ).catch( (error) => {
    //         alert(error);
    //     });
    // };


    render() {

        const linkStyle = {
            textDecoration: "none",
            paddingLeft: "1rem",
            paddingTop: "2.3125rem",
            color: "#737373",
        };


        const Navigation =  ({ authUser }) => (
            <>
                {authUser ? <LoggedOut /> : <LoggedIn />}
            </>
        );

        const LoggedOut =
        <>
            <div className='logReg'>
                <Link to='/logowanie' style={linkStyle}><span className='hoverLink'>Zaloguj</span></Link>
                <Link to='/rejestracja' style={linkStyle}><span className='register hoverLink'>Załóż konto</span></Link>
            </div>
        </>;

        const LoggedIn =
            <>
                <div className='logReg'>
                    <span>Cześć username </span>
                    <Link to='/oddaj-rzeczy' style={linkStyle}><span className='giveTheThings hoverLink'>Oddaj rzeczy</span></Link>

                    <SignOutButton/>

                </div>
            </>;


        if (sessionStorage.getItem("email") == null) {
            return (
                LoggedOut
            )
        } else {
            return (
                LoggedIn
            )
        }
    }
}

export default LogReg;