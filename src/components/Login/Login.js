import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";


class Login extends Component {

    render() {

        const linkStyle = {
          padding: "1rem",
            textDecoration: "none",
            color: "#000",
        };

        return (
            <>
                <section className='loginNavigation'>
                    <LogReg/>
                    <Navigation/>
                </section>
                <section className='loginForm'>
                    <h3>Zaloguj się</h3>
                    <img src={decoration} alt='decoration'/>

                    <div className='loginFormProper'>
                        <div className='loginEmailName'>
                            <span>Email</span>
                            <input type='text'/>
                        </div>
                        <div className='loginEmailName'>
                            <span>Hasło</span>
                            <input type='password'/>
                        </div>
                    </div>

                    <div className='loginButtons'>
                        <Link to='/rejestracja' style={linkStyle}><span>Załóż konto</span></Link>
                        <span className='logIn'>Zaloguj się</span>
                    </div>


                </section>
            </>
        )
    }
}

export default Login;