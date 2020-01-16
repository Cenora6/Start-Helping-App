import React, {Component} from 'react';
import lastStep from "../../assets/Icon-7.svg";
import info from "../../assets/Icon-8.svg";

class Step4 extends Component {
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
        const {width} = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <>
                    <div className='progressBar'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar doneBar'>2</span>
                        <span className='bar doneBar'>3</span>
                        <span className='bar activeBar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'>Wybierz datę odbioru rzecz przez kuriera:</span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Podaj adres oraz termin odbioru rzeczy.</p>
                        </div>
                    </div>

                    <div className='steps'>
                        <div className='addressDate'>
                            <form className='address' onSubmit={this.props.handleSubmit}>
                                <span className='title'>Adres odbioru:</span>
                                <div className='input'>
                                    <label htmlFor='street'>Ulica</label>
                                    <input type='text' id='street' name="street"
                                           value={this.props.street}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorStreet &&
                                <span className="errorStyle">Podana ulica jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='city'>Miasto</label>
                                    <input type='text' id='city' name="city"
                                           value={this.props.city}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorCity &&
                                <span className="errorStyle">Podane miasto jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='zipcode'>Kod pocztowy</label>
                                    <input type='phone' id='zipcode' name="zipcode"
                                           value={this.props.zipcode}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPostcode && <span className="errorStyle">Podany kod pocztowy jest nieprawidłowe!</span>}
                                <div className='input'>
                                    <label htmlFor='phone'>Numer telefonu</label>
                                    <input type='text' id='phone' name="phone"
                                           value={this.props.phone}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPhone &&
                                <span className="errorStyle">Podany telefon jest nieprawidłowy!</span>}

                            </form>
                            <form className='date' onSubmit={this.props.handleSubmit}>
                                <span className='title'>Termin odbioru</span>
                                <div className='input'>
                                    <label htmlFor='date'>Data</label>
                                    <input type='date' id='date' name="date"
                                           value={this.props.date}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorDate &&
                                <span className="errorStyle">Podana data jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='time'>Godzina</label>
                                    <input type='time' id='time' name="time"
                                           value={this.props.time}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorTime &&
                                <span className="errorStyle">Podana godzina jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='notes'>Uwagi dla kuriera</label>
                                    <textarea id='notes' name="notes"
                                              value={this.props.notes}
                                              onChange={this.props.handleChange}/>
                                </div>

                            </form>

                        </div>

                        <div className='nextPrevButtons addressButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleSubmit}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        } else {

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

                            <form className='address' onSubmit={this.props.handleSubmit}>
                                <span className='title'>Adres odbioru:</span>
                                <div className='input'>
                                    <label htmlFor='street'>Ulica</label>
                                    <input type='text' id='street' name="street"
                                           value={this.props.street}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorStreet &&
                                <span className="errorStyle errorStreet">Podana ulica jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='city'>Miasto</label>
                                    <input type='text' id='city' name="city"
                                           value={this.props.city}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorCity &&
                                <span className="errorStyle errorCity">Podane miasto jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='zipcode'>Kod pocztowy</label>
                                    <input type='phone' id='zipcode' name="zipcode"
                                           value={this.props.zipcode}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPostcode && <span className="errorStyle errorPostcode">Podany kod pocztowy jest nieprawidłowe!</span>}
                                <div className='input'>
                                    <label htmlFor='phone'>Numer telefonu</label>
                                    <input type='text' id='phone' name="phone"
                                           value={this.props.phone}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPhone &&
                                <span className="errorStyle errorPhone">Podany telefon jest nieprawidłowy!</span>}

                            </form>
                            <form className='date' onSubmit={this.props.handleSubmit}>
                                <span className='title'>Termin odbioru</span>
                                <div className='input'>
                                    <label htmlFor='date'>Data</label>
                                    <input type='date' id='date' name="date"
                                           value={this.props.date}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorDate &&
                                <span className="errorStyle errorDate">Podana data jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='time'>Godzina</label>
                                    <input type='time' id='time' name="time"
                                           value={this.props.time}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorTime &&
                                <span className="errorStyle errorTime">Podana godzina jest nieprawidłowa!</span>}
                                <div className='input'>
                                    <label htmlFor='notes'>Uwagi dla kuriera</label>
                                    <textarea id='notes' name="notes"
                                              value={this.props.notes}
                                              onChange={this.props.handleChange}/>
                                </div>

                            </form>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleSubmit}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step4;