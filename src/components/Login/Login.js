import React, {Component} from 'react';
import {NavigationLogReg} from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import {FirebaseContext, withFirebase} from '../firebase/context';
import {withRouter} from "react-router-dom"
import {Text} from "../Language/LanguageProvider";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        validEmail: false,
        validPassword: false,
        loginError: false,
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
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
                        password: "",
                        user: authUser.user
                    });

                    sessionStorage.setItem("email", `${authUser.user.email}`);
                    sessionStorage.setItem("uid", `${authUser.user.uid}`);

                    const { history } = this.props;

                    if(authUser.user.email === "admin@admin.pl") {
                        history.push("/admin");
                    } else {
                        history.push("/");
                    }
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

        const {width} = this.state;
        const isMobile = width <= 767;

        return (
            <>
                <form className='loginFormProper'>
                    {this.state.loginError && <span style={errorLogin}><Text tid="login1"/></span>}
                    <div className='loginEmailName'>
                        <span>Email</span>
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                        {isMobile ?
                            this.state.validEmail && <p className={'errorEmailMobile'}><Text tid="login2"/></p> :
                            this.state.validEmail && <p style={errorEmail}><Text tid="login2"/></p>
                        }
                    </div>
                    <div className='loginEmailName'>
                        <span><Text tid="login4"/></span>
                        <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        {isMobile ?
                            this.state.validPassword && <p className={'errorEmailMobile'}><Text tid="login3"/></p> :
                            this.state.validPassword && <p style={errorPassword}><Text tid="login3"/></p>
                        }
                    </div>
                </form>

                <div className='loginButtons'>
                    <Link to='/register' style={linkStyle}><span><Text tid="logReg2"/></span></Link>
                    <span className='logIn' onClick={this.handleFormSubmit}><Text tid="logReg1"/></span>
                </div>
            </>
        )
    }
}

const LoginIn = withRouter(withFirebase(LoginForm));

class Login extends Component {

    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {

        const {width} = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <>
                    <NavigationLogReg/>

                    <section className='loginForm'>
                        <h3><Text tid="logReg1"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <FirebaseContext.Consumer>
                            {firebase => <LoginIn firebase={firebase}/>}
                        </FirebaseContext.Consumer>

                    </section>
                </>
            )
        } else {

            return (
                <>
                    <section className='loginNavigation'>
                        <LogReg/>
                        <NavigationLogReg/>
                    </section>

                    <section className='loginForm'>
                        <h3><Text tid="logReg1"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <FirebaseContext.Consumer>
                            {firebase => <LoginIn firebase={firebase}/>}
                        </FirebaseContext.Consumer>

                    </section>
                </>
            )
        }
    }
}

export default Login;