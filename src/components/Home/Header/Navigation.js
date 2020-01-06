import React, {Component} from 'react';
import { Link } from "react-scroll";

class Navigation extends Component {

    render() {

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

export default Navigation;