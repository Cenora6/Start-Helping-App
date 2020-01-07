import React, {Component} from 'react';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Login from "../../Login/Login";

class Navigation extends Component {

    render() {

        const linkStyle = {
          textDecoration: "none",
            border: "none"
        };

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
                    <NavLink activeClass="active" style={linkStyle} exact to={"/"}>
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

export default Navigation;