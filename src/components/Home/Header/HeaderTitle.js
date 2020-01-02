import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import {Link} from 'react-router-dom';

class HeaderTitle extends Component {

    render() {

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        return (
            <div className='headerTitle'>
                <div className='title'>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</div>
                <img src={decoration} alt='decoration'/>
                <div className='headerButtons'>
                    <Link to='/logowanie' style={buttonStyle}> <p>Oddaj<br/>rzeczy</p></Link>
                    <Link to='/logowanie' style={buttonStyle}><p> Zorganizuj zbiórkę</p></Link>
                </div>
            </div>
        )
    }
}

export default HeaderTitle;