import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Donate extends Component {

    render() {

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        if (sessionStorage.getItem("email") == null) {
            return (
                <section className='donateSection'>
                    <Link to='/logowanie' style={buttonStyle} className='hoverLink'>
                        <p className='donateButton'>
                            Oddaj<br/> rzeczy
                        </p>
                    </Link>
                </section>
            )
        } else {
            return (
                <section className='donateSection'>
                    <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
                        <p className='donateButton'>
                            Oddaj<br/> rzeczy
                        </p>
                    </Link>
                </section>
            )
        }
    }
}

export default Donate;