import React, {Component} from 'react';
import Select from 'react-styled-select';
import lastStep from "../../assets/Icon-7.svg";
import info from "../../assets/Icon-8.svg";

class Step2Form extends Component {
    render() {

        const options = [
            { label: "1", value: 1},
            { label: "2", value: 2},
            { label: "3", value: 3},
            { label: "4", value: 4},
            { label: "5", value: 5},
        ];

        return (
            <div className='selectForm'>
                <span>Liczba 60L worków:</span>

                <Select
                    value={this.props.selectedOption}
                    onChange={this.props.handleSelectChange}
                    getOptionLabel={option => option}
                    getOptionValue={option => option}
                    searchable={false}
                    className="selectTheme"
                    options={options}
                    placeholder={"— wybierz —"}
                />
            </div>
        )
    }
}

class Step2 extends Component {
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
                        <span className='mobilechoose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
                    </div>

                    <div className='warningStep'>
                        <img src={info} alt={info}/>
                        <div className='warning'>
                            <h2>Ważne!</h2>
                            <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                        </div>
                    </div>

                    <div className='steps'>

                        {this.props.errorSelect && <span className="errorRadioMobile">Wybierz jedną z opcji!</span>}

                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>

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
                        <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                    </div>

                    <div className='steps'>
                        <span className='stepNum'>Krok 2/4</span>
                        <span className='choose'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>

                        <Step2Form selectedOption={this.props.selectedOption} handleSelectChange={this.props.handleSelectChange}/>

                        {this.props.errorSelect && <span className="errorStyle errorRadio">Wybierz jedną z opcji!</span>}
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

export default Step2;