import React, {Component} from 'react';
import lastStep from "../../assets/Icon-7.svg";
import info from "../../assets/Icon-8.svg";
import {Text} from "../Language/LanguageProvider";

class Step4 extends Component {
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
                        <span className='bar activeBar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'><Text tid="step30"/></span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2><Text tid="step7"/></h2>
                            <p><Text tid="step31"/></p>
                        </div>
                    </div>

                    <div className='steps'>
                        <div className='errors'>
                        <span className='errorMobileStyle'>
                            {this.props.errorStreet && <span><Text tid="step32"/></span>}
                            {this.props.errorCity && <span><Text tid="step33"/></span>}
                            {this.props.errorPostcode && <span><Text tid="step34"/></span>}
                            {this.props.errorPhone && <span><Text tid="step35"/></span>}
                            {this.props.errorDate && <span><Text tid="step36"/></span>}
                            {this.props.errorTime &&  <span><Text tid="step37"/></span>}
                        </span>
                        </div>
                        <div className='addressDate'>
                            <form className='address' onSubmit={this.props.handleSubmit}>
                                <span className='title'><Text tid="step38"/></span>
                                <div className='input'>
                                    <label htmlFor='street'><Text tid="step39"/></label>
                                    <input type='text' id='street' name="street"
                                           value={this.props.street}
                                           onChange={this.props.handleChange}/>
                                </div>
                                <div className='input'>
                                    <label htmlFor='city'><Text tid="step40"/></label>
                                    <input type='text' id='city' name="city"
                                           value={this.props.city}
                                           onChange={this.props.handleChange}/>
                                </div>
                                <div className='input'>
                                    <label htmlFor='zipcode'><Text tid="step41"/></label>
                                    <input type='phone' id='zipcode' name="zipcode"
                                           value={this.props.zipcode}
                                           onChange={this.props.handleChange}/>
                                </div>
                                <div className='input'>
                                    <label htmlFor='phone'><Text tid="step42"/></label>
                                    <input type='text' id='phone' name="phone"
                                           value={this.props.phone}
                                           onChange={this.props.handleChange}/>
                                </div>
                            </form>
                            <form className='date' onSubmit={this.props.handleSubmit}>
                                <span className='title'><Text tid="step43"/></span>
                                <div className='input'>
                                    <label htmlFor='date'><Text tid="step44"/></label>
                                    <input type='date' id='date' name="date"
                                           value={this.props.date}
                                           onChange={this.props.handleChange}/>
                                </div>
                                <div className='input'>
                                    <label htmlFor='time'><Text tid="step45"/></label>
                                    <input type='time' id='time' name="time"
                                           value={this.props.time}
                                           onChange={this.props.handleChange}/>
                                </div>
                                <div className='input'>
                                    <label htmlFor='notes'><Text tid="step46"/></label>
                                    <textarea id='notes' name="notes"
                                              value={this.props.notes}
                                              onChange={this.props.handleChange}/>
                                </div>

                            </form>

                        </div>

                        <div className='nextPrevButtons addressButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
                            <span className='nextButton hoverLink' onClick={this.props.handleSubmit}><Text tid="step11"/></span>
                        </div>
                    </div>
                </>
            )
        } else {

            return (
                <>
                    <div className='warningStep'>
                        <h2><Text tid="step7"/></h2>
                        <p><Text tid="step31"/></p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'><Text tid="step47"/></span>
                        <span className='choose'><Text tid="step31"/></span>
                        <div className='addressDate'>

                            <form className='address' onSubmit={this.props.handleSubmit}>
                                <span className='title'><Text tid="step38"/></span>
                                <div className='input'>
                                    <label htmlFor='street'><Text tid="step39"/></label>
                                    <input type='text' id='street' name="street"
                                           value={this.props.street}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorStreet &&
                                <span className="errorStyle errorStreet"><Text tid="step48"/></span>}
                                <div className='input'>
                                    <label htmlFor='city'><Text tid="step40"/></label>
                                    <input type='text' id='city' name="city"
                                           value={this.props.city}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorCity &&
                                <span className="errorStyle errorCity"><Text tid="step49"/></span>}
                                <div className='input'>
                                    <label htmlFor='zipcode'><Text tid="step41"/></label>
                                    <input type='phone' id='zipcode' name="zipcode"
                                           value={this.props.zipcode}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPostcode && <span className="errorStyle errorPostcode"><Text tid="step50"/></span>}
                                <div className='input'>
                                    <label htmlFor='phone'><Text tid="step42"/></label>
                                    <input type='text' id='phone' name="phone"
                                           value={this.props.phone}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorPhone &&
                                <span className="errorStyle errorPhone"><Text tid="step51"/></span>}

                            </form>
                            <form className='date' onSubmit={this.props.handleSubmit}>
                                <span className='title'><Text tid="step43"/></span>
                                <div className='input'>
                                    <label htmlFor='date'><Text tid="step44"/></label>
                                    <input type='date' id='date' name="date"
                                           value={this.props.date}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorDate &&
                                <span className="errorStyle errorDate"><Text tid="step52"/></span>}
                                <div className='input'>
                                    <label htmlFor='time'><Text tid="step45"/></label>
                                    <input type='time' id='time' name="time"
                                           value={this.props.time}
                                           onChange={this.props.handleChange}/>
                                </div>
                                {this.props.errorTime &&
                                <span className="errorStyle errorTime"><Text tid="step53"/></span>}
                                <div className='input'>
                                    <label htmlFor='notes'><Text tid="step46"/></label>
                                    <textarea id='notes' name="notes"
                                              value={this.props.notes}
                                              onChange={this.props.handleChange}/>
                                </div>

                            </form>

                        </div>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
                            <span className='nextButton hoverLink' onClick={this.props.handleSubmit}><Text tid="step11"/></span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step4;