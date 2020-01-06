import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LogReg extends Component {

    handleSessionEnd = () => {
        sessionStorage.clear();
    };

    render() {

        const linkStyle = {
            textDecoration: "none",
            paddingLeft: "1rem",
            paddingTop: "2.3125rem",
            color: "#737373",
        };

        const logOutStyle = {
            textDecoration: "none",
            paddingLeft: "1rem",
            opacity: "0.5",
            color: "#000",
        };

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
                    <span>Cześć {sessionStorage.getItem("email")}</span>
                    <Link to='/oddaj-rzeczy' style={linkStyle}><span className='giveTheThings hoverLink'>Oddaj rzeczy</span></Link>

                    <Link to='/wylogowano' style={logOutStyle} onClick={this.handleSessionEnd} >
                        <span className='hoverLink'>Wyloguj</span>
                    </Link>

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