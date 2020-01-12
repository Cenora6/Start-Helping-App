import React, {Component} from 'react';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class Navigation extends Component {
    state = {
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

    handleSessionEnd = () => {
        sessionStorage.clear();
    };

    render() {

        const linkStyle = {
            textDecoration: "none",
            border: "none"
        };

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            if (sessionStorage.getItem("email") == null) {
                return (
                    <section className='mobileNavigation'>
                        <div className='hamburger' id='hamburger'>
                        </div>
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"}>
                            <Link activeClass="active" to="start" spy={true} smooth={true} offset={50} duration={500}>
                                <div>Start</div>
                            </Link>
                            <Link activeClass="active" to="whatIsIt" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div>O co chodzi?</div>
                            </Link>
                            <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div>Fundacja i organizacje</div>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <div>Kontakt</div>
                            </Link>
                            <div className='line'/>
                            <NavLink to="/logowanie">
                                <div>Zaloguj</div>
                            </NavLink>
                            <NavLink to="/rejestracja">
                                <div>Zarejestruj się</div>
                            </NavLink>
                        </Menu>

                    </section>
                )
            } else {
                return (
                    <section className='mobileNavigation'>
                        <div className='hamburger' id='hamburger'>
                        </div>
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"}>
                            <Link activeClass="active" to="start" spy={true} smooth={true} offset={50} duration={500}>
                                <div>Start</div>
                            </Link>
                            <Link activeClass="active" to="whatIsIt" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div>O co chodzi?</div>
                            </Link>
                            <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div>Fundacja i organizacje</div>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <div>Kontakt</div>
                            </Link>
                            <div className='line'/>
                            <div className='hello'>Cześć {sessionStorage.getItem("email")}</div>
                            <NavLink to='/oddaj-rzeczy'>
                                <span>Oddaj rzeczy</span>
                            </NavLink>
                            <NavLink to='/wylogowano' onClick={this.handleSessionEnd}>
                                <div>Wyloguj</div>
                            </NavLink>
                        </Menu>

                    </section>
                )
            }

        } else {

            if (sessionStorage.getItem("email") == null){
                return (
                    <div className='navigationLinks'>
                        <Link activeClass="active" to="start" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Start</div>
                        </Link>
                        <Link activeClass="active" to="whatIsIt" spy={true} smooth={true} offset={50} duration={500}>
                            <div>O co chodzi?</div>
                        </Link>
                        <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>
                            <div>O nas</div>
                        </Link>
                        <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Fundacja i organizacje</div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Kontakt</div>
                        </Link>
                    </div>
                )

            } else {
                return (
                    <div className='navigationLinks'>
                        <NavLink style={linkStyle} exact to={"/"}>
                            <div>Start</div>
                        </NavLink>
                        <Link activeClass="active" to="whatIsIt" spy={true} smooth={true} offset={50} duration={500}>
                            <div>O co chodzi?</div>
                        </Link>
                        <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>
                            <div>O nas</div>
                        </Link>
                        <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Fundacja i organizacje</div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Kontakt</div>
                        </Link>
                    </div>
                )
            }
        }
    }
}

export default Navigation;