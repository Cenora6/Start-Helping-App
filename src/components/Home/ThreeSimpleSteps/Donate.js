import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Donate extends Component {

    render() {

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        return (
            <section className='donateSection'>
                <Link to='/logowanie' style={buttonStyle}>
                    <p class='donateButton'>
                        Oddaj<br/> rzeczy
                    </p>
                </Link>
            </section>
        )
    }
}

export default Donate;