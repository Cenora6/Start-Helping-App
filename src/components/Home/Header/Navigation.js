import React, {Component} from 'react';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class NavigationStart extends Component {
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

    handleSessionEnd = () => {
        sessionStorage.clear();
    };

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            if (sessionStorage.getItem("email") == null) {
                return (
                    <section className='mobileNavigation'>
                        <div className='hamburger' id='hamburger'>
                        </div>
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"} isOpen={true}
                              menuClicked={this.handleClick}>
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
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"} isOpen={true}>
                            <Link activeClass="active" to="summary" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div>Twoje statystyki</div>
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
            }
        }
    }
}

class NavigationForm extends Component {

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

    handleSessionEnd = () => {
        sessionStorage.clear();
    };

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {

        const linkStyle = {
            textDecoration: "none",
            border: "none"
        };

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <section className='mobileNavigation'>
                    <div className='hamburger' id='hamburger'>
                    </div>
                    <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"} isOpen={true}
                          menuClicked={this.handleClick}>
                        <NavLink to="/">
                            <div>Start</div>
                        </NavLink>
                        <Link activeClass="active" to="form" spy={true} smooth={true} offset={50} duration={500}>
                            <div>Formularz</div>
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
        } else {
            return (
                <div className='navigationLinks'>
                    <NavLink to="/" style={linkStyle}>
                        <div>Start</div>
                    </NavLink>
                    <Link activeClass="active" to="form" spy={true} smooth={true} offset={50} duration={500}>
                        <div>Formularz</div>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <div>Kontakt</div>
                    </Link>
                </div>
            )
        }
    }
}

class NavigationLogReg extends Component {

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

    handleSessionEnd = () => {
        sessionStorage.clear();
    };

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {

        const linkStyle = {
            textDecoration: "none",
            border: "none"
        };

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <section className='mobileNavigation'>
                    <div className='hamburger' id='hamburger'>
                    </div>
                    <Menu pageWrapId={"page-wrap"} outerContainerId={"hamburger"} isOpen={true}
                          menuClicked={this.handleClick}>
                        <NavLink to="/" style={linkStyle}>
                            <div>Start</div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div>O co chodzi?</div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div>O nas</div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div>Fundacja i organizacje</div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div>Kontakt</div>
                        </NavLink>
                        <div className='line'/>
                        <NavLink to="/logowanie" style={linkStyle}>
                            <div>Zaloguj</div>
                        </NavLink>
                        <NavLink to="/rejestracja" style={linkStyle}>
                            <div>Zarejestruj się</div>
                        </NavLink>
                    </Menu>
                </section>
            )
        } else {
            return (
                <div className='navigationLinks'>
                    <NavLink to="/" style={linkStyle}>
                        <div>Start</div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div>O co chodzi?</div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div>O nas</div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div>Fundacja i organizacje</div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div>Kontakt</div>
                    </NavLink>
                </div>
            )
        }
    }
}

export {NavigationForm, NavigationLogReg, NavigationStart};