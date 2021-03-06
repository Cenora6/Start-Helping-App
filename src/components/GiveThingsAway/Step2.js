import React, {Component} from 'react';
import Select from 'react-styled-select';
import lastStep from "../../assets/Icon-7.svg";
import info from "../../assets/Icon-8.svg";
import {LanguageContext, Text} from "../Language/LanguageProvider";

class Step2Form extends Component {
    static contextType = LanguageContext;
    render() {
        const dictionary = this.context.dictionary;

        const options = [
            { label: "1", value: 1},
            { label: "2", value: 2},
            { label: "3", value: 3},
            { label: "4", value: 4},
            { label: "5", value: 5},
        ];

        return (
            <div className='selectForm' id='form'>
                <span><Text tid="step12"/></span>

                <Select
                    value={this.props.selectedOption}
                    onChange={this.props.handleSelectChange}
                    getOptionLabel={option => option}
                    getOptionValue={option => option}
                    searchable={false}
                    className="selectTheme"
                    options={options}
                    placeholder={dictionary.placeholder}
                />
            </div>
        )
    }
}

class Step2 extends Component {
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
                        <span className='bar doneBar'>1</span>
                        <span className='bar activeBar'>2</span>
                        <span className='bar'>3</span>
                        <span className='bar'>4</span>
                        <span className='bar'><img src={lastStep} alt={lastStep}/></span>
                    </div>

                    <div className='titleStep'>
                        <span className='mobilechoose'><Text tid="step13"/></span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2><Text tid="step7"/></h2>
                            <p><Text tid="step14"/></p>
                        </div>
                    </div>

                    <div className='steps'>

                        {this.props.errorSelect && <span className="errorRadioMobile"><Text tid="step9"/></span>}

                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>

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
                        <p><Text tid="step14"/></p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'><Text tid="step16"/></span>
                        <span className='choose'><Text tid="step13"/></span>

                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>

                        {this.props.errorSelect && <span className="errorStyle errorRadio"><Text tid="step9"/></span>}
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

export default Step2;