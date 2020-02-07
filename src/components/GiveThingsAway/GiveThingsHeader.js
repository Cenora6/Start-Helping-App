import React, {Component} from 'react';
import LogReg from "../Home/Header/LogReg";
import {NavigationForm} from "../Home/Header/Navigation";
import decoration from "./../../assets/Decoration.svg"
import {Text} from "../Language/LanguageProvider";

class GiveThingsAwayHeader extends Component {
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

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <section className='giveThingsAway'>
                        <NavigationForm/>
                    <div className='giveThingsAwayWelcome'>
                        <div className='giveThingsAwayText'>
                            <h2><Text tid="giveThingsHeader1"/></h2>
                            <h3><Text tid="giveThingsHeader2"/></h3>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='giveThingsAway'>
                    <div className='giveThingsAwayHeader'>
                        <LogReg/>
                        <NavigationForm/>
                    </div>
                    <div className='giveThingsAwayWelcome'>
                        <div className='giveThingsAwayText'>
                            <h2><Text tid="giveThingsHeader1"/></h2>
                            <img src={decoration} alt={decoration}/>
                            <h3><Text tid="giveThingsHeader2"/></h3>

                            <ul className='giveThingsAwaySteps'>
                                <li>
                                    <div className='square'></div>
                                    <span>1</span>
                                    <p><Text tid="giveThingsHeader3a"/><br/><Text tid="giveThingsHeader3b"/></p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>2</span>
                                    <p><Text tid="giveThingsHeader4a"/><br/><Text tid="giveThingsHeader4b"/></p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>3</span>
                                    <p><Text tid="giveThingsHeader5a"/><br/><Text tid="giveThingsHeader5b"/></p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>4</span>
                                    <p><Text tid="giveThingsHeader6a"/><br/><Text tid="giveThingsHeader6b"/></p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default GiveThingsAwayHeader;