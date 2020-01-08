import React, {Component} from 'react';
import Select from 'react-styled-select';

class Step2 extends Component {

    render() {

        const options = [
            { label: "1", value: 1},
            { label: "2", value: 2},
            { label: "3", value: 3},
            { label: "4", value: 4},
            { label: "5", value: 5},
        ];

        return (
            <>
                <div className='warningStep'>
                    <h2>Ważne!</h2>
                    <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>

                <div className='steps'>
                    <span className='stepNum'>Krok 2/4</span>
                    <span className='choose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>

                    <div className='selectForm'>
                        <span>Liczba 60L worków:</span>

                        <Select
                            searchable={false}
                            className="selectTheme"
                            options={options}
                            placeholder={"— wybierz —"}
                        />

                        {/*<select>*/}
                        {/*    <option value="0">-wybierz-</option>*/}
                        {/*    <option value="1">1</option>*/}
                        {/*    <option value="2">2</option>*/}
                        {/*    <option value="3">3</option>*/}
                        {/*    <option value="4">4</option>*/}
                        {/*    <option value="5">5</option>*/}
                        {/*</select>*/}

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

export default Step2;