import React, {Component} from 'react';
import shirt from './../../assets/Icon-1.svg'
import arrows from './../../assets/Icon-4.svg'

class Step5 extends Component {

    render() {


        return (
            <>

                <section className='steps'>
                    <span className='choose'>Podsumowanie Twojej darowizny</span>

                    <div className='whatToGiveSummary'>
                        <h2>Oddajesz:</h2>
                        <div className='giveThingsAndWhere'>
                            <img src={shirt} alt={shirt}/>
                            <span>{this.props.selectValue} worki, {this.props.radioValue}, {this.props.checkboxValue}</span>
                        </div>
                        <div className='giveThingsAndWhere'>
                            <img src={arrows} alt={arrows}/>
                            <span>dla lokalizacji: Warszawa</span>
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
                        <span className='nextButton hoverLink' onClick={this.props.handleNext}>Potwierdzam</span>
                    </div>

                </section>
            </>
        )
    }
}

export default Step5;