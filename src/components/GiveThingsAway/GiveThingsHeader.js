import React, {Component} from 'react';
import LogReg from "../Home/Header/LogReg";
import Navigation from "../Home/Header/Navigation";
import decoration from "./../../assets/Decoration.svg"

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
                        <Navigation/>
                    <div className='giveThingsAwayWelcome'>
                        <div className='giveThingsAwayText'>
                            <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                            <h3>Wystarczą 4 proste kroki:</h3>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className='giveThingsAway'>
                    <div className='giveThingsAwayHeader'>
                        <LogReg/>
                        <Navigation/>
                    </div>
                    <div className='giveThingsAwayWelcome'>
                        <div className='giveThingsAwayText'>
                            <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                            <img src={decoration} alt={decoration}/>
                            <h3>Wystarczą 4 proste kroki:</h3>

                            <ul className='giveThingsAwaySteps'>
                                <li>
                                    <div className='square'></div>
                                    <span>1</span>
                                    <p>Wybierz<br/>rzeczy</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>2</span>
                                    <p>Spakuj je<br/>w worki</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>3</span>
                                    <p>Wybierz<br/>fundację</p>
                                </li>
                                <li>
                                    <div className='square'></div>
                                    <span>4</span>
                                    <p>Zamów<br/>kuriera</p>
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