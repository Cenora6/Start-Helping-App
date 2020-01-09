import React, {Component} from 'react';

class Step3 extends Component {

    render() {


        return (
            <>
                <div className='warningStep'>
                    <h2>Ważne!</h2>
                    <p>Podaj adres oraz termin odbioru rzeczy.</p>
                </div>

                <div className='steps'>
                    <span className='stepNum'>Krok 4/4</span>
                    <span className='choose'>Podaj adres oraz termin odbioru rzeczy przez kuriera</span>
                    <div className='addressDate'>

                        <form className='address'>
                            <span className='title'>Adres odbioru:</span>
                            <div className='input'>
                                <label htmlFor='street'>Ulica</label>
                                <input type='text' id='street' name="street"/>
                            </div>
                            <div className='input'>
                                <label htmlFor='city'>Miasto</label>
                                <input type='text' id='city' name="city"/>
                            </div>
                            <div className='input'>
                                <label htmlFor='code'>Kod pocztowy</label>
                                <input type='text' id='code' name="code"/>
                            </div>
                            <div className='input'>
                                <label htmlFor='phone'>Numer telefonu</label>
                                <input type='text' id='phone' name="phone"/>
                            </div>

                        </form>
                        <form className='date'>
                            <span className='title'>Termin odbioru</span>
                            <div className='input'>
                                <label htmlFor='date'>Data</label>
                                <input type='text' id='date' name="date"/>
                            </div>
                            <div className='input'>
                                <label htmlFor='hour'>Godzina</label>
                                <input type='text' id='hour' name="hour"/>
                            </div>
                            <div className='input'>
                                <label htmlFor='notes'>Uwagi dla kuriera</label>
                                <textarea id='notes' name="notes"/>
                            </div>

                        </form>

                    </div>

                    <div className='nextPrevButtons'>
                        <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                        <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Step3;