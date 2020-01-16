import React, {Component} from 'react';
import shirt from './../../assets/Icon-1.svg'
import arrows from './../../assets/Icon-4.svg'
import lastStep from "../../assets/Icon-7.svg";

class Step5 extends Component {
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
                        <span className='bar doneBar'>4</span>
                        <span className='bar activeBar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'>Podsumowanie Twojej darowizny</span>
                    </div>

                    <section className='steps summaryStep'>
                        <div className='whatToGiveSummary'>
                            <h2>Oddajesz:</h2>
                            <div className='giveThingsAndWhere'>
                                <img src={shirt} alt={shirt}/>
                                <span>{this.props.selectValue} worki, {this.props.radioValue}, {this.props.checkboxValues.join(', ')}</span>
                            </div>
                            <div className='giveThingsAndWhere'>
                                <img src={arrows} alt={arrows}/>
                                <span>dla lokalizacji: {this.props.selectedCityOrOrganization}</span>
                            </div>
                        </div>

                        <div className='addressDate'>
                            <div className='summaryAddress'>
                                <span className='title'>Adres odbioru:</span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Ulica</span>
                                    <input type='text' value={this.props.street}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Miasto</span>
                                    <input type='text' value={this.props.city}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Kod pocztowy</span>
                                    <input type='text' value={this.props.zipcode}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Numer telefonu</span>
                                    <input type='text' value={this.props.phone}/>
                                </div>
                            </div>

                            <div className='summaryDate'>
                                <span className='title'>Termin odbioru:</span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Termin odbioru</span>
                                    <input type='text' value={this.props.date}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Godzina</span>
                                    <input type='text' value={this.props.time}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Uwagi do kuriera</span>
                                    <input type='text' value={this.props.notes}/>
                                </div>
                            </div>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink confirmButton' onClick={this.props.handleConfirm}>Potwierdzam</span>
                        </div>

                    </section>
                </>
            )
        } else {
            return (
                <>
                    <section className='steps'>
                        <span className='choose'>Podsumowanie Twojej darowizny</span>

                        <div className='whatToGiveSummary'>
                            <h2>Oddajesz:</h2>
                            <div className='giveThingsAndWhere'>
                                <img src={shirt} alt={shirt}/>
                                <span>{this.props.selectValue} worki, {this.props.radioValue}, {this.props.checkboxValues.join(', ')}</span>
                            </div>
                            <div className='giveThingsAndWhere'>
                                <img src={arrows} alt={arrows}/>
                                <span>dla lokalizacji: {this.props.selectedCityOrOrganization}</span>
                            </div>
                        </div>

                        <div className='addressDate'>

                            <div className='summaryAddress'>
                                <span className='title'>Adres odbioru:</span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Ulica</span>
                                    <span>{this.props.street}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Miasto</span>
                                    <span>{this.props.city}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Kod pocztowy</span>
                                    <span>{this.props.zipcode}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Numer telefonu</span>
                                    <span>{this.props.phone}</span>
                                </div>
                            </div>

                            <div className='summaryDate'>
                                <span className='title'>Termin odbioru:</span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Termin odbioru</span>
                                    <span>{this.props.date}9</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Godzina</span>
                                    <span>{this.props.time}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'>Uwagi do kuriera</span>
                                    <span>{this.props.notes}</span>
                                </div>
                            </div>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleConfirm}>Potwierdzam</span>
                        </div>

                    </section>
                </>
            )
        }
    }
}

export default Step5;