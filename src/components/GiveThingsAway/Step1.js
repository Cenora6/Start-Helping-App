import React, {Component} from 'react';
import lastStep from './../../assets/Icon-7.svg'
import info from './../../assets/Icon-8.svg'

class Step1 extends Component {
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
                    <div className='progressBar'>
                        <span className='bar activeBar'>1</span>
                        <span className='bar'>2</span>
                        <span className='bar'>3</span>
                        <span className='bar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'>Zaznacz co chcesz oddać:</span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                        </div>
                    </div>

                    <div className='steps'>

                        {this.props.radioError && <span className="errorStyle errorRadio">Zaznacz jedną z opcji!</span>}
                        <form className='radioForm'>
                            <div className='radioOptions'>
                                <input type='radio' id='clothesToUse' name="whatToGive"
                                       value="ubrania, które nadają się do ponownego użycia"
                                       onClick={this.props.handleRadioChange}/>
                                <label htmlFor='clothesToUse'>ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='clothesToThrow' name="whatToGive"
                                       value="ubrania, do wyrzucenia"
                                       onClick={this.props.handleRadioChange}/>
                                <label htmlFor='clothesToThrow'>ubrania, do wyrzucenia</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='toys' name="whatToGive"
                                       value="zabawki" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='toys'>zabawki</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='books' name="whatToGive"
                                       value="książki" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='books'>książki</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='others' name="whatToGive"
                                       value="inne" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='others'>inne</label>
                            </div>
                        </form>
                        <div className='nextPrevButtons'>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='warningStep'>
                        <h2>Ważne!</h2>
                        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'>Krok 1/4</span>
                        <span className='choose'>Zaznacz co chcesz oddać:</span>
                        {this.props.radioError && <span className="errorStyle errorRadio">Zaznacz jedną z opcji!</span>}
                        <form className='radioForm'>
                            <div className='radioOptions'>
                                <input type='radio' id='clothesToUse' name="whatToGive"
                                       value="ubrania, które nadają się do ponownego użycia"
                                       onClick={this.props.handleRadioChange}/>
                                <label htmlFor='clothesToUse'>ubrania, które nadają się do ponownego użycia</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='clothesToThrow' name="whatToGive"
                                       value="ubrania, do wyrzucenia"
                                       onClick={this.props.handleRadioChange}/>
                                <label htmlFor='clothesToThrow'>ubrania, do wyrzucenia</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='toys' name="whatToGive"
                                       value="zabawki" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='toys'>zabawki</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='books' name="whatToGive"
                                       value="książki" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='books'>książki</label>
                            </div>
                            <div className='radioOptions'>
                                <input type='radio' id='others' name="whatToGive"
                                       value="inne" onClick={this.props.handleRadioChange}/>
                                <label htmlFor='others'>inne</label>
                            </div>
                        </form>
                        <div className='nextPrevButtons'>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step1;