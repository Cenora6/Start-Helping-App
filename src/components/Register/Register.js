import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";


class Register extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        validEmail: false,
        validPassword: false,
        validPassword2: false,
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

    handlePassword2Change = (e) => {
        this.setState({
            password2: e.target.value
        })
    };

    handleFormSubmit = (e) => {

        this.setState({
            formSend: false,
            validPassword: false,
            validPassword2: false,
            validEmail: false,
        });

        e.preventDefault();
        const {password, password2, email} = this.state;

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailValidation.test(email) &&
            password.length >= 6 &&
            password2.length >= 6 &&
            password2 === password) {

            this.setState({
                formSend: true,
                password: "",
                password2: "",
                email: "",
            });

        } else {
            if (password.length < 6) {
                this.setState({
                    validPassword: true,
                })
            }
            if (password2.length < 6) {
                this.setState({
                    validPassword2: true,
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
            top: "29rem",
            width: "15.1rem"
        };

        const errorPassword = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "35.05rem",
            width: "15.1rem"
        };

        const errorPassword2 = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "41.1rem",
            width: "15.1rem"
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
                            <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                            {this.state.validEmail && <span style={errorEmail}>Podany email jest nieprawidłowy!</span>}
                        </div>
                        <div className='registerEmailName'>
                            <span>Hasło</span>
                            <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                            {this.state.validPassword && <span style={errorPassword}>Podane hasło jest nieprawidłowe!</span>}
                        </div>
                        <div className='registerEmailName'>
                            <span>Powtórz hasło</span>
                            <input type='password' value={this.state.password2} onChange={this.handlePassword2Change}/>
                            {this.state.validPassword2 && <span style={errorPassword2}>Hasło nie zgadza się z poprzednim!</span>}
                        </div>
                    </div>

                    <div className='loginButtons'>
                        <Link to='/logowanie' style={linkStyle}><span>Zaloguj się</span></Link>
                        <span className='logIn' onClick={this.handleFormSubmit}>Załóż konto</span>
                    </div>


                </section>
            </>
        )
    }
}

export default Register;