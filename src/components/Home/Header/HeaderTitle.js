import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import {Link} from 'react-router-dom';
import {Text} from "../../Language/LanguageProvider";

class HeaderTitle extends Component {
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

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        const buttonStyleMobile = {
            textDecoration: "none",
            paddingTop: "1rem",
            color: "#3C3C3C",
        };

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <div className='headerMobile' id='start'>
                    <div className='mobileSubtitle'><Text tid="headerTitle1"/></div>
                    <div className='mobileTitle'><Text tid="headerTitle2a"/><br/><Text tid="headerTitle2b"/></div>
                    <div className='headerButtons'>
                        <Link to='/rejestracja' style={buttonStyleMobile} className='hoverLink'>
                            <p><Text tid="logReg2"/></p>
                        </Link>
                    </div>
                </div>
            )

        } else {
            if (sessionStorage.getItem("email") == null) {
                return (
                    <div className='headerTitle' id='start'>
                        <div className='title'><Text tid="headerTitle3a"/><br/><Text tid="headerTitle3b"/></div>
                        <img src={decoration} alt='decoration'/>
                        <div className='headerButtons'>
                            <Link to='/logowanie' style={buttonStyle} className='hoverLink'><p><Text tid="headerTitle4a"/><br/><Text tid="headerTitle4b"/></p>
                            </Link>
                            <Link to='/logowanie' style={buttonStyle} className='hoverLink'><p><Text tid="headerTitle5"/></p>
                            </Link>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='headerTitle' id='start'>
                        <div className='title'><Text tid="headerTitle3a"/><br/><Text tid="headerTitle3b"/></div>
                        <img src={decoration} alt='decoration'/>
                        <div className='headerButtons'>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'><p><Text tid="headerTitle4a"/><br/><Text tid="headerTitle4b"/></p>
                            </Link>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'><p><Text tid="headerTitle5"/></p>
                            </Link>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default HeaderTitle;