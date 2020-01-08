import React, {Component} from 'react';
import Select from 'react-styled-select';

class Step3 extends Component {

    render() {

        const options = [
            { label: "Poznań", value: "Poznań"},
            { label: "Warszawa", value: "Warszawa"},
            { label: "Kraków", value: "Kraków"},
            { label: "Wrocław", value: "Wrocław"},
            { label: "Katowice", value: "Katowice"},
        ];

        return (
            <>
                <div className='warningStep'>
                    <h2>Ważne!</h2>
                    <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>

                <div className='steps'>
                    <span className='stepNum'>Krok 3/4</span>
                    <span className='choose'>Lokalizacja:</span>
                    <div className='selectForm localization'>
                        <Select searchable={false}
                                className="selectTheme cities"
                                options={options}
                                placeholder={"— wybierz —"}
                        />
                    </div>
                    <div className='whoYouHelp'>
                        <span className='chooseHelp'>Komu chcesz pomóc?</span>

                        <form className='checkboxFormHelp'>
                            <div className='checkboxOptionsHelp'>
                                <input type='checkbox' id='kids' name="whoToHelp" value="kids"/>
                                <label htmlFor='kids'>dzieciom</label>
                            </div>
                            <div className='checkboxOptionsHelp'>
                                <input type='checkbox' id='mothers' name="whoToHelp" value="mothers"/>
                                <label htmlFor='mothers'>samotnym matkom</label>
                            </div>
                            <div className='checkboxOptionsHelp'>
                                <input type='checkbox' id='homeless' name="whoToHelp" value="homeless"/>
                                <label htmlFor='homeless'>bezdomnym</label>
                            </div>
                            <div className='checkboxOptionsHelp'>
                                <input type='checkbox' id='disabled' name="whoToHelp" value="disabled"/>
                                <label htmlFor='disabled'>niepełnosprawnym</label>
                            </div>
                            <div className='checkboxOptionsHelp'>
                                <input type='checkbox' id='old' name="whoToHelp" value="old"/>
                                <label htmlFor='old'>osobom starszym</label>
                            </div>
                        </form>

                        <span className='chooseHelp'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</span>
                        <input type='text'/>

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