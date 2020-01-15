import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import {Link} from 'react-router-dom';

class HeaderTitle extends Component {
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
                    <div className='mobileSubtitle'>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</div>
                    <div className='mobileTitle'>ODDAJ JE POTRZEBUJĄCYM <br/> - szybko i w zaufane ręce</div>
                    <div className='headerButtons'>
                        <Link to='/rejestracja' style={buttonStyleMobile} className='hoverLink'>
                            <p>Załóż konto</p>
                        </Link>
                    </div>
                </div>
            )

        } else {
            if (sessionStorage.getItem("email") == null) {
                return (
                    <div className='headerTitle' id='start'>
                        <div className='title'>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</div>
                        <img src={decoration} alt='decoration'/>
                        <div className='headerButtons'>
                            <Link to='/logowanie' style={buttonStyle} className='hoverLink'><p>Oddaj<br/>rzeczy</p>
                            </Link>
                            <Link to='/logowanie' style={buttonStyle} className='hoverLink'><p> Zorganizuj zbiórkę</p>
                            </Link>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className='headerTitle' id='start'>
                        <div className='title'>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</div>
                        <img src={decoration} alt='decoration'/>
                        <div className='headerButtons'>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'><p>Oddaj<br/>rzeczy</p>
                            </Link>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'><p> Zorganizuj zbiórkę</p>
                            </Link>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default HeaderTitle;