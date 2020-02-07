import React, {Component} from 'react';
import {NavigationLogReg} from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import {FirebaseContext, withFirebase} from '../firebase/context';
import {withRouter} from "react-router-dom"
import {Text} from "../Language/LanguageProvider";

class RegisterForm extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        validEmail: false,
        validPassword: false,
        validPassword2: false,
        registerError: false,
        width: window.innerWidth,
    };

    componentWillMount() {
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

    handlePassword2Change = (e) => {
        this.setState({
            password2: e.target.value
        })
    };

    handleFormSubmit = (e) => {

        this.setState({
            validPassword: false,
            validPassword2: false,
            validEmail: false,
        });

        e.preventDefault();

        const {password, password2, email} = this.state;

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( emailValidation.test(email) &&
            password.length >= 6 &&
            password2.length >= 6 &&
            password2 === password ) {

            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({
                        email: "",
                        password: "",
                        password2: ""
                    });

                    sessionStorage.setItem("email", `${authUser.user.email}`);
                    sessionStorage.setItem("uid", `${authUser.user.uid}`);

                    const { history } = this.props;
                    history.push("/");
                })
                .catch((error) => {

                    if (error.code === 'auth/email-already-in-use') {
                        this.setState({
                            registerError: true,
                            password: "",
                            password2: ""
                        })
                    }
                });

        } else {
            if (password.length < 6) {
                this.setState({
                    validPassword: true,
                })
            }
            if (password2.length < 6 || password2 !== password) {
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
            top: "28.7rem",
            width: "15.1rem"
        };

        const errorPassword = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "34.75rem",
            width: "15.1rem"
        };

        const errorPassword2 = {
            fontSize: "0.8rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "40.8rem",
            width: "15.1rem"
        };

        const errorRegister = {
            fontSize: "1rem",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "22.5rem",
        };

        const {width} = this.state;
        const isMobile = width <= 767;

        return (
            <>
                <form className='registerFormProper'>
                    {this.state.registerError && <span style={errorRegister}><Text tid="register1"/></span>}
                    <div className='registerEmailName'>
                        <span>Email</span>
                        <input type='text' value={this.state.email} onChange={this.handleEmailChange}/>
                        {isMobile ?
                            this.state.validEmail && <p className={'errorEmailMobile'}><Text tid="login2"/></p> :
                            this.state.validEmail && <p style={errorEmail}><Text tid="login2"/></p>
                        }
                    </div>
                    <div className='registerEmailName'>
                        <span>Hasło</span>
                        <input type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        {isMobile ?
                            this.state.validPassword && <p className={'errorEmailMobile'}><Text tid="login3"/></p> :
                            this.state.validPassword && <p style={errorPassword}><Text tid="login3"/></p>
                        }
                    </div>
                    <div className='registerEmailName'>
                        <span>Powtórz hasło</span>
                        <input type='password' value={this.state.password2} onChange={this.handlePassword2Change}/>
                        {isMobile ?
                            this.state.validPassword2 && <p className={'errorEmailMobile'}><Text tid="register2"/></p> :
                            this.state.validPassword2 && <p style={errorPassword2}><Text tid="register2"/></p>
                        }
                    </div>
                </form>

                <div className='loginButtons'>
                    <Link to='/logowanie' style={linkStyle}><span><Text tid="logReg1"/></span></Link>
                    <span className='logIn' onClick={this.handleFormSubmit}><Text tid="logReg2"/></span>
                </div>

            </>
        )
    }
}

const Registration = withRouter(withFirebase(RegisterForm));

class Register extends Component {

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
                        <h3><Text tid="logReg2"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <FirebaseContext.Consumer>
                            {firebase => <Registration firebase={firebase}/>}
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
                        <h3><Text tid="logReg2"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <FirebaseContext.Consumer>
                            {firebase => <Registration firebase={firebase}/>}
                        </FirebaseContext.Consumer>

                    </section>
                </>
            )
        }
    }
}

export default Register;