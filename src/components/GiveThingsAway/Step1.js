import React, {Component} from 'react';

class Step1 extends Component {

    render() {

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

export default Step1;