import React, {Component} from 'react';
import Navigation from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import {FirebaseContext, withFirebase} from '../firebase/context';
import {withRouter} from "react-router-dom"

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        validEmail: false,
        validPassword: false,
        loginError: false,
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
            validPassword: false,
            validEmail: false,
            loginError: false,
        });

        e.preventDefault();
        const {password, email} = this.state;

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailValidation.test(email) &&
            password.length >= 6) {

            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({
                        email: "",
                        password: ""
                    });
                    console.log("sukces!");

                    console.log(authUser.user.email);

                    sessionStorage.setItem("email", `${this.state.email}`);
                    const { history } = this.props;
                    history.push("/");
                })
                .catch((error) => {

                    if (error.code === 'auth/user-not-found') {
                        this.setState({
                            loginError: true,
                            email: "",
                            password: "",
                        })
                    }
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
            top: "31.7rem",
            width: "15.1rem"
        };

        const errorPassword = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "37.75rem",
            width: "15.1rem"
        };

        const errorLogin = {
            fontSize: "1rem",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "25.5rem",
        };

        return (
            <>
                <form className='loginFormProper'>
                    {this.state.loginError && <span style={errorLogin}>Podany email nie istnieje w bazie!</span>}
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
                </form>

                <div className='loginButtons'>
                    <Link to='/rejestracja' style={linkStyle}><span>Załóż konto</span></Link>
                    <span className='logIn' onClick={this.handleFormSubmit}>Zaloguj się</span>
                </div>
            </>
        )
    }
}

const LoginIn = withRouter(withFirebase(LoginForm));

class Login extends Component {
    render() {
        return (
            <>
                <section className='loginNavigation'>
                    <LogReg/>
                    <Navigation/>
                </section>

                <section className='loginForm'>
                    <h3>Zaloguj się</h3>
                    <img src={decoration} alt='decoration'/>

                    <FirebaseContext.Consumer>
                        {firebase => <LoginIn firebase={firebase} />}
                    </FirebaseContext.Consumer>

                </section>
            </>
        )
    }
}

export default Login;