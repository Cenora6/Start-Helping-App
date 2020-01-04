import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";


class Register extends Component {

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
                    <h3>Załóż konto</h3>
                    <img src={decoration} alt='decoration'/>

                    <div className='registerFormProper'>
                        <div className='registerEmailName'>
                            <span>Email</span>
                            <input type='text'/>
                        </div>
                        <div className='registerEmailName'>
                            <span>Hasło</span>
                            <input type='password'/>
                        </div>
                        <div className='registerEmailName'>
                            <span>Powtórz hasło</span>
                            <input type='password'/>
                        </div>
                    </div>

                    <div className='loginButtons'>
                        <Link to='/logowanie' style={linkStyle}><span>Zaloguj się</span></Link>
                        <span className='logIn'>Załóż konto</span>
                    </div>


                </section>
            </>
        )
    }
}

export default Register;