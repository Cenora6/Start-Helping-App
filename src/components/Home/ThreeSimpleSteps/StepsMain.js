import React, {Component} from 'react';
import StepsHeader from "./StepsHeader";
import Donate from "./Donate";
import Icon1 from "./../../../assets/Icon-1.svg";
import Icon2 from "./../../../assets/Icon-2.svg";
import Icon3 from "./../../../assets/Icon-3.svg";
import Icon4 from "./../../../assets/Icon-4.svg";
import {Text} from "../../Language/LanguageProvider";

class StepsMain extends Component {

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
                                <span><Text tid="stepsMain1"/></span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon2} alt='Icon2'/>
                                <span><Text tid="stepsMain2"/></span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon3} alt='Icon3'/>
                                <span><Text tid="stepsMain3"/></span>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon4} alt='Icon4'/>
                                <span><Text tid="stepsMain4"/></span>
                            </div>
                        </div>
                    </section>
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
                                <span><Text tid="stepsMain5"/></span>
                                <div></div>
                                <p><Text tid="stepsMain6"/></p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon2} alt='Icon2'/>
                                <span><Text tid="stepsMain2"/></span>
                                <div></div>
                                <p><Text tid="stepsMain7"/></p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon3} alt='Icon3'/>
                                <span><Text tid="stepsMain3"/></span>
                                <div></div>
                                <p><Text tid="stepsMain8"/></p>
                            </div>
                            <div className='stepColumn'>
                                <img src={Icon4} alt='Icon4'/>
                                <span><Text tid="stepsMain9"/></span>
                                <div></div>
                                <p><Text tid="stepsMain10"/></p>
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