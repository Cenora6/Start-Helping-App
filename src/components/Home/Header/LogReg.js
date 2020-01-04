import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LogReg extends Component {

    render() {

        const linkStyle = {
            textDecoration: "none",
            paddingLeft: "1rem",
            paddingTop: "2.3125rem",
            color: "#737373",
    };

        return (
            <div className='logReg'>
                <Link to='/logowanie' style={linkStyle}><span>Zaloguj</span></Link>
                <Link to='/rejestracja' style={linkStyle}><span className='register'>Załóż konto</span></Link>
            </div>
        )
    }
}

export default LogReg;