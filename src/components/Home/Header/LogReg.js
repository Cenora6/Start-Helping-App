import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
import LanguageSelector from './../../Language/LanguageSelector';
import { Text } from '../../Language/LanguageProvider';

class LogReg extends Component {
    state = {
        clickText: null,
        setClickText: null,
    };

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
                    <LanguageSelector />
                    <Link to='/logowanie' style={linkStyle}><span className='hoverLink'><Text tid="logReg1"/></span></Link>
                    <Link to='/rejestracja' style={linkStyle}><span className='register hoverLink'><Text tid="logReg2"/></span></Link>
                </div>
            </>;

        const LoggedIn =
            <>
                <div className='logReg'>
                    <LanguageSelector />
                    <span><Text tid="logReg5"/> {sessionStorage.getItem("email")}</span>
                    <Link to='/oddaj-rzeczy' style={linkStyle}><span className='giveTheThings hoverLink'><Text tid="logReg3"/></span></Link>

                    <Link to='/wylogowano' style={logOutStyle} onClick={this.handleSessionEnd} >
                        <span className='hoverLink'><Text tid="logReg4"/></span>
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