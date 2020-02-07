import React, {Component} from 'react';
import decoration from './../../../assets/Decoration.svg'
import clothes from './../../../assets/Background-Contact-Form.jpg'
import instagram from './../../../assets/Instagram.svg'
import facebook from './../../../assets/Facebook.svg'
import phone from './../../../assets/Icon-5.svg'
import letter from './../../../assets/Icon-6.svg'
import {Text} from "../../Language/LanguageProvider";

class ContactUs extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        formSent: false,
        validName: false,
        validEmail: false,
        validMessage: false,
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

    changeName = (e) => {

        this.setState({
            name: e.target.value,
        });
    };

    changeEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    };

    changeMessage = (e) => {

        this.setState({
            message: e.target.value,
        });
    };

    handleFormSubmit = (e) => {

        this.setState({
            formSend: false,
            validName: false,
            validEmail: false,
            validMessage: false,
        });

        e.preventDefault();
        const {name, email, message} = this.state;

        const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const nameValidation = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{2,}$/i;

        if (nameValidation.test(name) &&
            emailValidation.test(email)
            && message.length >= 120) {

            this.setState({
                formSend: true,
                name: "",
                email: "",
                message: "",
            });

            const apiUrl = "https://fer-api.coderslab.pl/v1/portfolio/contact";

            fetch(apiUrl,{
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then(success => {
                    console.log("Kod 200", success);
                })
                .catch(function(error) {
                    console.log("Kod 404", error);
                });

        } else {
            if (!nameValidation.test(name)) {
                this.setState({
                    validName: true,
                })
            }
            if (!emailValidation.test(email)) {
                this.setState({
                    validEmail: true,
                })
            }
            if (message.length < 120) {
                this.setState({
                    validMessage: true,
                })
            }
        }
    };

    render() {

        const endTextStyle = {
            fontSize: "1rem",
            fontWeight: 700,
            color: "green",
            fontFamily: "Open Sans, sans-serif",
            textAlign: "center",
            width: "50%",
            lineHeight: "1.5rem",
        };

        const errorStyle = {
            fontSize: "0.8rem",
            margin: 0,
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "15.4rem",
            width: "15rem",
        };

        const errorMsg = {
            fontSize: "0.8rem",
            marginTop: "-3rem",
            borderTop: "1px solid red",
            paddingTop: "0.5rem",
            color: "red",
            position: "absolute",
            top: "28.85rem",
            width: "33.4rem",

        };

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <section className='contactUs' id='contact'>
                    <div className='contactIcons'>
                        <span><Text tid="contactUs4"/></span>
                        <img src={phone} alt={phone}/>
                        <img src={letter} alt={letter}/>
                    </div>
                    <ul className='contactList'>
                        <li><Text tid="contactUs1"/></li>
                        <li><Text tid="contactUs2"/></li>
                        <li><Text tid="contactUs3"/></li>
                    </ul>
                </section>
            )


        } else {

            return (

                <section className='contactUs' id='contact'>
                    <div className='contactUsImage'>
                        <img src={clothes} alt='clothes' className='backgroundPhoto'/>
                        <span className='copyright'>Copyright by Coders Lab | Aleksandra Gasidło</span>
                        <div className='socialMedia'>
                            <img src={facebook} alt='facebook'/>
                            <img src={instagram} alt='instagram'/>
                        </div>
                    </div>
                    <div className='contactUsText'>
                        <h2><Text tid="contactUs4"/></h2>
                        <img src={decoration} alt='decoration'/>
                        <form className='contactForm' onSubmit={this.handleFormSubmit}>
                            {this.state.formSend && <h3 style={endTextStyle}><Text tid="contactUs5"/></h3>}
                            <div className='nameEmail'>
                                <div className='name'>
                                    <span><Text tid="contactUs6"/></span>
                                    <input placeholder='Krzysztof' value={this.state.name} onChange={this.changeName} type='text'/>
                                    {this.state.validName && <span style={errorStyle}><Text tid="contactUs7"/></span>}
                                </div>
                                <div className='email'>
                                    <span><Text tid="contactUs8"/></span>
                                    <input placeholder='abc@xyz.pl' value={this.state.email} onChange={this.changeEmail} type='text'/>
                                    {this.state.validEmail && <span style={errorStyle}><Text tid="contactUs9"/></span>}
                                </div>
                            </div>
                            <div className='message'>
                                <span><Text tid="contactUs10"/></span>
                                <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                          value={this.state.message}
                                          onChange={this.changeMessage} type='text'></textarea>
                                {this.state.validMessage && <span style={errorMsg}><Text tid="contactUs11"/></span>}
                            </div>
                            <div className='sendFormButton'>
                                <button className='hoverLink'><Text tid="contactUs12"/></button>
                            </div>
                        </form>

                    </div>
                </section>
            )
        }
    }
}

export default ContactUs;