import React, {Component} from 'react';
import shirt from './../../assets/Icon-1.svg'
import arrows from './../../assets/Icon-4.svg'
import lastStep from "../../assets/Icon-7.svg";
import {Text} from "../Language/LanguageProvider";

class Step5 extends Component {
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

        const {width} = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <>
                    <div className='progressBar' id='form'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar doneBar'>2</span>
                        <span className='bar doneBar'>3</span>
                        <span className='bar doneBar'>4</span>
                        <span className='bar activeBar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'><Text tid="step54"/></span>
                    </div>

                    <section className='steps summaryStep'>
                        <div className='whatToGiveSummary'>
                            <h2><Text tid="step55"/></h2>
                            <div className='giveThingsAndWhere'>
                                <img src={shirt} alt={shirt}/>
                                <span>{this.props.selectValue} <Text tid="step56"/>, {this.props.radioValue}, {this.props.checkboxValues.join(', ')}</span>
                            </div>
                            <div className='giveThingsAndWhere'>
                                <img src={arrows} alt={arrows}/>
                                <span><Text tid="step58"/> {this.props.selectedCityOrOrganization}</span>
                            </div>
                        </div>

                        <div className='addressDate'>
                            <div className='summaryAddress'>
                                <span className='title'><Text tid="step38"/></span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step39"/></span>
                                    <input type='text' value={this.props.street}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step40"/></span>
                                    <input type='text' value={this.props.city}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step41"/></span>
                                    <input type='text' value={this.props.zipcode}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step42"/></span>
                                    <input type='text' value={this.props.phone}/>
                                </div>
                            </div>

                            <div className='summaryDate'>
                                <span className='title'><Text tid="step43"/></span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step44"/></span>
                                    <input type='text' value={this.props.date}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step45"/></span>
                                    <input type='text' value={this.props.time}/>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step46"/></span>
                                    <input type='text' value={this.props.notes}/>
                                </div>
                            </div>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
                            <span className='nextButton hoverLink confirmButton' onClick={this.props.handleConfirm}><Text tid="step57"/></span>
                        </div>

                    </section>
                </>
            )
        } else {
            return (
                <>
                    <section className='steps'>
                        <span className='choose'><Text tid="step54"/></span>

                        <div className='whatToGiveSummary'>
                            <h2><Text tid="step55"/></h2>
                            <div className='giveThingsAndWhere'>
                                <img src={shirt} alt={shirt}/>
                                <span>{this.props.selectValue} <Text tid="step56"/>, {this.props.radioValue}, {this.props.checkboxValues.join(', ')}</span>
                            </div>
                            <div className='giveThingsAndWhere'>
                                <img src={arrows} alt={arrows}/>
                                <span><Text tid="step58"/> {this.props.selectedCityOrOrganization}</span>
                            </div>
                        </div>

                        <div className='addressDate'>

                            <div className='summaryAddress'>
                                <span className='title'><Text tid="step38"/></span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step39"/></span>
                                    <span>{this.props.street}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step40"/></span>
                                    <span>{this.props.city}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step41"/></span>
                                    <span>{this.props.zipcode}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step42"/></span>
                                    <span>{this.props.phone}</span>
                                </div>
                            </div>

                            <div className='summaryDate'>
                                <span className='title'><Text tid="step43"/></span>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step44"/></span>
                                    <span>{this.props.date}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step45"/></span>
                                    <span>{this.props.time}</span>
                                </div>
                                <div className='summaryInput'>
                                    <span className='inputTitle'><Text tid="step46"/></span>
                                    <span>{this.props.notes}</span>
                                </div>
                            </div>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
                            <span className='nextButton hoverLink' onClick={this.props.handleConfirm}><Text tid="step57"/></span>
                        </div>

                    </section>
                </>
            )
        }
    }
}

export default Step5;