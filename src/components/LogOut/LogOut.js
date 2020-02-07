import React, {Component} from 'react';
import {NavigationLogReg} from "../Home/Header/Navigation";
import LogReg from "../Home/Header/LogReg";
import decoration from "../../assets/Decoration.svg"
import {Link} from "react-router-dom";
import {Text} from "../Language/LanguageProvider";

class LogOut extends Component {

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

        const linkStyle = {
            padding: "1rem",
            textDecoration: "none",
            color: "#000",
        };

        if (isMobile) {
            return (
                <>
                    <NavigationLogReg/>
                    <section className='loginForm'>
                        <h3><Text tid="logOut1"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <div className='backHome'>
                            <Link to='/' style={linkStyle}><span className='clickButton'><Text tid="logOut2"/></span></Link>
                        </div>

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
                        <h3><Text tid="logOut1"/></h3>
                        <img src={decoration} alt='decoration'/>

                        <div className='backHome'>
                            <Link to='/' style={linkStyle}><span className='clickButton'><Text tid="logOut2"/></span></Link>
                        </div>

                    </section>
                </>
            )
        }
    }
}

export default LogOut;
