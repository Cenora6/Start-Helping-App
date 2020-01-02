import React, {Component} from 'react';
import LogReg from "./LogReg";
import HeaderImage from './../../../assets/Home-Hero-Image.jpg';
import Navigation from "./Navigation";
import HeaderTitle from "./HeaderTitle";

class MainHeader extends Component {

    render() {
        return (
            <header>
                <div className='headerImage'>
                    <img src={HeaderImage} alt={HeaderImage}/>
                </div>
                <div className='headerNavigation'>
                    <LogReg/>
                    <Navigation/>
                    <HeaderTitle/>
                </div>
            </header>
        )
    }
}

export default MainHeader;