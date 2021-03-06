import React, {Component} from 'react';
import lastStep from './../../assets/Icon-7.svg'
import info from './../../assets/Icon-8.svg'
import {LanguageContext, Text} from "../Language/LanguageProvider";

class Step1Form extends Component {
    static contextType = LanguageContext;

    render() {
        const dictionary = this.context.dictionary;

        return (
                <form className='radioForm' id='form'>
                    <div className='radioOptions'>
                        <input type='radio' id='clothesToUse' name="whatToGive"
                               value={dictionary.step1}
                               onChange={this.props.handleRadioChange}
                               checked={this.props.radioValue.indexOf(dictionary.step1) > -1}
                        />
                        <label htmlFor='clothesToUse'><Text tid="step1"/></label>
                    </div>
                    <div className='radioOptions'>
                        <input type='radio' id='clothesToThrow' name="whatToGive"
                               value={dictionary.step2}
                               onChange={this.props.handleRadioChange}
                               checked={this.props.radioValue.indexOf(dictionary.step2) > -1}
                        />
                        <label htmlFor='clothesToThrow'><Text tid="step2"/></label>
                    </div>
                    <div className='radioOptions'>
                        <input type='radio' id='toys' name="whatToGive"
                               value={dictionary.step3} onChange={this.props.handleRadioChange}
                               checked={this.props.radioValue.indexOf(dictionary.step3) > -1}
                        />
                        <label htmlFor='toys'><Text tid="step3"/></label>
                    </div>
                    <div className='radioOptions'>
                        <input type='radio' id='books' name="whatToGive"
                               value={dictionary.step4} onChange={this.props.handleRadioChange}
                               checked={this.props.radioValue.indexOf(dictionary.step4) > -1}
                        />
                        <label htmlFor='books'><Text tid="step4"/></label>
                    </div>
                    <div className='radioOptions'>
                        <input type='radio' id='others' name="whatToGive"
                               value={dictionary.step5} onChange={this.props.handleRadioChange}
                               checked={this.props.radioValue.indexOf(dictionary.step5) > -1}
                        />
                        <label htmlFor='others'><Text tid="step5"/></label>
                    </div>
                </form>
        );
    }
}

class Step1 extends Component {
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
                    <div className='progressBar'>
                        <span className='bar activeBar'>1</span>
                        <span className='bar'>2</span>
                        <span className='bar'>3</span>
                        <span className='bar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'><Text tid="step6"/></span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2><Text tid="step7"/></h2>
                            <p><Text tid="step8"/></p>
                        </div>
                    </div>

                    <div className='steps'>
                        {this.props.radioError && <span className="errorRadioMobile"><Text tid="step9"/></span>}

                        <Step1Form handleRadioChange={this.props.handleRadioChange} radioValue={this.props.radioValue}/>

                        <div className='nextPrevButtons'>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}><Text tid="step11"/></span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='warningStep'>
                        <h2><Text tid="step7"/></h2>
                        <p><Text tid="step8"/></p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'><Text tid="step10"/></span>
                        <span className='choose'><Text tid="step6"/></span>
                        {this.props.radioError && <span className="errorStyle errorRadio"><Text tid="step9"/></span>}

                        <Step1Form handleRadioChange={this.props.handleRadioChange} radioValue={this.props.radioValue}/>

                        <div className='nextPrevButtons'>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}><Text tid="step11"/></span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step1;