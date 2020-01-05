import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";


class Login extends Component {
    state = {
        email: "",
        password: "",
        formSend: false,
        validEmail: false,
        validPassword: false,
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleFormSubmit = (e) => {

        this.setState({
            formSend: false,
            validPassword: false,
            validEmail: false,
        });

        e.preventDefault();
        const {password, email} = this.state;

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailValidation.test(email) &&
            password.length >= 6) {

            this.setState({
                formSend: true,
                password: "",
                email: "",
            });

        } else {
            if (password.length < 6) {
                this.setState({
                    validPassword: true,
                })
            }
            if (!emailValidation.test(email)) {
                this.setState({
                    validEmail: true,
                })
            }
        }
    };

    render() {

        const linkStyle = {
            padding: "1rem",
            textDecoration: "none",
            color: "#000",
        };

        const errorEmail = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "32rem",
            width: "15.1rem"
        };

        const errorPassword = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "38.05rem",
            width: "15.1rem"
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
                            <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                            {this.state.validEmail && <span style={errorEmail}>Podany email jest nieprawidłowy!</span>}
                        </div>
                        <div className='loginEmailName'>
                            <span>Hasło</span>
                            <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                            {this.state.validPassword && <span style={errorPassword}>Podane hasło jest za krótkie!</span>}
                        </div>
                    </div>

                    <div className='loginButtons'>
                        <Link to='/rejestracja' style={linkStyle}><span>Załóż konto</span></Link>
                        <span className='logIn' onClick={this.handleFormSubmit}>Zaloguj się</span>
                    </div>


                </section>
            </>
        )
    }
}

export default Login;