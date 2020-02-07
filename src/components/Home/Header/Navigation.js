import React, {Component} from 'react';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import {Text} from "../../Language/LanguageProvider";

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
                                <div><Text tid="navigation1"/></div>
                            </Link>
                            <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div><Text tid="navigation2"/></div>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <div><Text tid="navigation3"/></div>
                            </Link>
                            <div className='line'/>
                            <NavLink to="/logowanie">
                                <div><Text tid="logReg1"/></div>
                            </NavLink>
                            <NavLink to="/rejestracja">
                                <div><Text tid="navigation4"/></div>
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
                                <div><Text tid="navigation5"/></div>
                            </Link>
                            <Link activeClass="active" to="whatIsIt" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div><Text tid="navigation1"/></div>
                            </Link>
                            <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50}
                                  duration={500}>
                                <div><Text tid="navigation2"/></div>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                <div><Text tid="navigation3"/></div>
                            </Link>
                            <div className='line'/>
                            <div className='hello'><Text tid="logReg5"/> {sessionStorage.getItem("email")}</div>
                            <NavLink to='/oddaj-rzeczy'>
                                <span><Text tid="headerTitle5"/>Oddaj rzeczy</span>
                            </NavLink>
                            <NavLink to='/wylogowano' onClick={this.handleSessionEnd}>
                                <div><Text tid="logReg4"/></div>
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
                            <div><Text tid="navigation1"/></div>
                        </Link>
                        <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="aboutUs"/></div>
                        </Link>
                        <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="navigation2"/></div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="navigation3"/></div>
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
                            <div><Text tid="navigation1"/></div>
                        </Link>
                        <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="aboutUs"/></div>
                        </Link>
                        <Link activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="navigation2"/></div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="navigation3"/></div>
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
                            <div><Text tid="navigation6"/></div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                            <div><Text tid="navigation3"/></div>
                        </Link>
                        <div className='line'/>
                        <div className='hello'><Text tid="logReg5"/> {sessionStorage.getItem("email")}</div>
                        <NavLink to='/oddaj-rzeczy'>
                            <span><Text tid="logReg3"/></span>
                        </NavLink>
                        <NavLink to='/wylogowano' onClick={this.handleSessionEnd}>
                            <div><Text tid="logReg4"/></div>
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
                        <div><Text tid="navigation6"/></div>
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <div><Text tid="navigation3"/></div>

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
                            <div><Text tid="navigation1"/></div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div><Text tid="aboutUs"/></div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div><Text tid="navigation2"/></div>
                        </NavLink>
                        <NavLink to="/" style={linkStyle}>
                            <div><Text tid="navigation3"/></div>
                        </NavLink>
                        <div className='line'/>
                        <NavLink to="/logowanie" style={linkStyle}>
                            <div><Text tid="logReg1"/></div>
                        </NavLink>
                        <NavLink to="/rejestracja" style={linkStyle}>
                            <div><Text tid="navigation4"/></div>
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
                        <div><Text tid="navigation1"/></div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div><Text tid="aboutUs"/></div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div><Text tid="navigation2"/></div>
                    </NavLink>
                    <NavLink to="/" style={linkStyle}>
                        <div><Text tid="navigation3"/></div>
                    </NavLink>
                </div>
            )
        }
    }
}

export {NavigationForm, NavigationLogReg, NavigationStart};