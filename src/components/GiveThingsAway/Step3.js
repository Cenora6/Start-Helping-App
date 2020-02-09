import React, {Component} from 'react';
import Select from 'react-styled-select';
import info from "../../assets/Icon-8.svg";
import lastStep from "../../assets/Icon-7.svg";
import {LanguageContext, Text} from "../Language/LanguageProvider";

class Step3Form extends Component {
    static contextType = LanguageContext;

    render() {
        const dictionary = this.context.dictionary;
        return (
            <div className='whoYouHelp' id='form'>
                <span className='chooseHelp'><Text tid="step17"/></span>

                <form className='checkboxFormHelp'>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='kids' name="whoToHelp" value={dictionary.step18}
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf(dictionary.step18) > -1}/>
                        <label htmlFor='kids'><Text tid="step18"/></label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='mothers' name="whoToHelp" value={dictionary.step19}
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf(dictionary.step19) > -1}/>
                        <label htmlFor='mothers'><Text tid="step19"/></label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='homeless' name="whoToHelp" value={dictionary.step20}
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf(dictionary.step20) > -1}/>
                        <label htmlFor='homeless'><Text tid="step20"/></label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='disabled' name="whoToHelp" value={dictionary.step21}
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf(dictionary.step21) > -1}/>
                        <label htmlFor='disabled'><Text tid="step21"/></label>
                    </div>
                    <div className='checkboxOptionsHelp'>
                        <input type='checkbox' id='old' name="whoToHelp" value={dictionary.step22}
                               onClick={this.props.handleCheckboxChange}
                               checked={ this.props.checkboxValues.indexOf(dictionary.step22) > -1}/>
                        <label htmlFor='old'><Text tid="step22"/></label>
                    </div>
                </form>

                <span className='chooseHelp'><Text tid="step23"/></span>
                <input type='text' id='organization' name="organization"
                       onChange={this.props.handlewriteOrganization}/>
            </div>
        )
    }
}

class Step3 extends Component {
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

    static contextType = LanguageContext;

    render() {
        const dictionary = this.context.dictionary;

        const options = [
            {label: `${dictionary.city1}`, value: `${dictionary.city1}`},
            {label: `${dictionary.city2}`, value: `${dictionary.city2}`},
            {label: `${dictionary.city3}`, value: `${dictionary.city3}`},
            {label: `${dictionary.city4}`, value: `${dictionary.city4}`},
            {label: `${dictionary.city5}`, value: `${dictionary.city5}`},
        ];

        const {width} = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <>
                    <div className='progressBar'>
                        <span className='bar doneBar'>1</span>
                        <span className='bar doneBar'>2</span>
                        <span className='bar activeBar'>3</span>
                        <span className='bar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'><Text tid="step24"/></span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2><Text tid="step7"/></h2>
                            <p><Text tid="step25"/></p>
                        </div>
                    </div>

                    <div className='steps'>


                        {this.props.errorStep3 && <span className="errorLocalizationMobile">
                        <Text tid="step26"/></span>}

                        <div className='selectForm localization'>
                            <span className=''><Text tid="step27"/></span>
                            <Select value={this.props.selectedCityOrOrganization}
                                    onChange={this.props.handleSelectCityChange}
                                    getOptionLabel={option => option}
                                    getOptionValue={option => option}
                                    searchable={false}
                                    className="selectTheme cities"
                                    options={options}
                                    placeholder={dictionary.placeholder}
                            />
                        </div>

                        <Step3Form handleCheckboxChange={this.props.handleCheckboxChange} checkboxValues={ this.props.checkboxValues}
                                   handlewriteOrganization={this.props.handlewriteOrganization}/>

                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
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
                        <p><Text tid="step25"/></p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'><Text tid="step28"/></span>
                        <span className='choose'><Text tid="step27"/></span>
                        <div className='selectForm localization'>
                            <Select value={this.props.selectedCityOrOrganization}
                                    onChange={this.props.handleSelectCityChange}
                                    getOptionLabel={option => option}
                                    getOptionValue={option => option}
                                    searchable={false}
                                    className="selectTheme cities"
                                    options={options}
                                    placeholder={"— wybierz —"}
                            />
                        </div>

                        <Step3Form handleCheckboxChange={this.props.handleCheckboxChange} checkboxValues={ this.props.checkboxValues}
                                   handlewriteOrganization={this.props.handlewriteOrganization}/>

                        {this.props.errorStep3 && <span className="errorStyle errorLocalization">
                        <Text tid="step29"/></span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}><Text tid="step15"/></span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}><Text tid="step11"/></span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step3;