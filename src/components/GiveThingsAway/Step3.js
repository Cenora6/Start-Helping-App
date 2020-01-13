import React, {Component} from 'react';
import Select from 'react-styled-select';
import info from "../../assets/Icon-8.svg";
import lastStep from "../../assets/Icon-7.svg";

class Step3 extends Component {
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

        const options = [
            {label: "Poznań", value: "Poznań"},
            {label: "Warszawa", value: "Warszawa"},
            {label: "Kraków", value: "Kraków"},
            {label: "Wrocław", value: "Wrocław"},
            {label: "Katowice", value: "Katowice"},
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
                        <span className='mobilechoose'>Znajdź organizację, której chcesz pomóc:</span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                                filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                        </div>
                    </div>

                    <div className='steps'>
                        <div className='selectForm localization'>
                            <span className=''>Lokalizacja</span>
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
                        <div className='whoYouHelp'>
                            <span className='chooseHelp'>Komu chcesz pomóc?</span>

                            <form className='checkboxFormHelp'>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='kids' name="whoToHelp" value="dzieciom"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='kids'>dzieciom</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='mothers' name="whoToHelp" value="samotnym matkom"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='mothers'>samotnym matkom</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='homeless' name="whoToHelp" value="bezdomnym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='homeless'>bezdomnym</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='disabled' name="whoToHelp" value="niepełnosprawnym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='disabled'>niepełnosprawnym</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='old' name="whoToHelp" value="osobom starszym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='old'>osobom starszym</label>
                                </div>
                            </form>

                            <span className='chooseHelp'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</span>
                            <input type='text' id='organization' name="organization"
                                   onChange={this.props.handlewriteOrganization}/>

                        </div>
                        {this.props.errorStep3 && <span className="errorStyle errorRadio">
                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
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
                        <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                            filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'>Krok 3/4</span>
                        <span className='choose'>Lokalizacja:</span>
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
                        <div className='whoYouHelp'>
                            <span className='chooseHelp'>Komu chcesz pomóc?</span>

                            <form className='checkboxFormHelp'>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='kids' name="whoToHelp" value="dzieciom"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='kids'>dzieciom</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='mothers' name="whoToHelp" value="samotnym matkom"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='mothers'>samotnym matkom</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='homeless' name="whoToHelp" value="bezdomnym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='homeless'>bezdomnym</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='disabled' name="whoToHelp" value="niepełnosprawnym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='disabled'>niepełnosprawnym</label>
                                </div>
                                <div className='checkboxOptionsHelp'>
                                    <input type='checkbox' id='old' name="whoToHelp" value="osobom starszym"
                                           onClick={this.props.handleCheckboxChange}/>
                                    <label htmlFor='old'>osobom starszym</label>
                                </div>
                            </form>

                            <span className='chooseHelp'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</span>
                            <input type='text' id='organization' name="organization"
                                   onChange={this.props.handlewriteOrganization}/>

                        </div>
                        {this.props.errorStep3 && <span className="errorStyle errorRadio">
                        Wybierz miasto lub wpisz organizację! Zaznacz przynajmniej jedną z opcji!</span>}
                        <div className='nextPrevButtons'>
                            <span className='prevButton hoverLink' onClick={this.props.handlePrevious}>Cofnij</span>
                            <span className='nextButton hoverLink' onClick={this.props.handleNext}>Dalej</span>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Step3;