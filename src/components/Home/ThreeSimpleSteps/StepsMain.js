import React, {Component} from 'react';
import StepsHeader from "./StepsHeader";
import Donate from "./Donate";
import Icon1 from "./../../../assets/Icon-1.svg";
import Icon2 from "./../../../assets/Icon-2.svg";
import Icon3 from "./../../../assets/Icon-3.svg";
import Icon4 from "./../../../assets/Icon-4.svg";

class StepsMain extends Component {

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
                <>
                    <StepsHeader/>
                    <section className='simpleStepsColumns'>
                        <div className='stepsContainer'>
                            <div className='stepColumn'>
                                <img src={Icon1} alt='Icon1'/>
                                <span>Wybierz rzeczy do oddania</span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon2} alt='Icon2'/>
                                <span>Spakuj je</span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon3} alt='Icon3'/>
                                <span>Zdecyduj komu chcesz pomóc</span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon4} alt='Icon4'/>
                                <span>Zamów kuriera w dogodnym terminie</span>
                            </div>
                        </div>
                    </section>

                    <Donate/>
                </>
            )
        } else {
            return (
                <>
                    <StepsHeader/>
                    <section className='simpleStepsColumns'>
                        <div className='stepsContainer'>
                            <div className='stepColumn'>
                                <img src={Icon1} alt='Icon1'/>
                                <span>Wybierz rzeczy</span>
                                <div></div>
                                <p>ubrania, zabawki, sprzęt i inne</p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon2} alt='Icon2'/>
                                <span>Spakuj je</span>
                                <div></div>
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon3} alt='Icon3'/>
                                <span>Zdecyduj komu chcesz pomóc</span>
                                <div></div>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon4} alt='Icon4'/>
                                <span>Zamów kuriera</span>
                                <div></div>
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </div>
                        </div>
                    </section>

                    <Donate/>
                </>
            )

        }
    }
}

export default StepsMain;