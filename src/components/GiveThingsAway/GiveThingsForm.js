import React, {Component} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

class GiveThingsAwayForm extends Component {

    state = {
        counter: 1,
        radioValue: "",
        selectedOption: "",
        optionValue: "",
        checkboxValue: "",
        city: "",
        street: "",
        zipcode: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
        errorStreet: false,
        errorCity: false,
        errorPostcode: false,
        errorPhone: false,
        errorDate: false,
        errorTime: false,
    };

    handleNext = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };

    handlePrevious = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleRadioChange = (e) => {
        this.setState({
            radioValue: e.target.value,
        });
        console.log(`Co oddajemy:`, e.target.value);

    };

    handleSelectChange = (value) => {
        this.setState({
            selectedOption: value,
            optionValue: value,
        });
    };

    handleCheckboxChange = (e) => {
        this.setState({
            checkboxValue: e.target.value,
        });

        console.log(`Komu:`,  e.target.value);

    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            errorStreet: false,
            errorCity: false,
            errorPostcode: false,
            errorPhone: false,
            errorDate: false,
            errorTime: false,
        });

        const {street, city, zipcode, phone, date, time} = this.state;
        console.log(street, city, zipcode, phone, date, time);
        console.log(this.state.counter);

        const postcodeValidation = /[0-9]{2}-[0-9]{3}/;
        const phoneValidation = /^([0-9]{9})$/;

        if (street.length > 0 && city.length > 0 && phone.length >= 9 && date.length > 0 && time.length > 0
            && (postcodeValidation.test(zipcode)) && (phoneValidation.test(phone)) ) {

            this.setState({
                counter: this.state.counter + 1
            });

        } else {
            if (street.length === 0) {
                this.setState({
                    errorStreet: true,
                })
            }
            if (city.length === 0) {
                this.setState({
                    errorCity: true,
                })
            }
            if (!postcodeValidation.test(zipcode)) {
                this.setState({
                    errorPostcode: true,
                })
            }
            if (!phoneValidation.test(phone)) {
                this.setState({
                    errorPhone: true,
                })
            }
            if (date.length < 6) {
                this.setState({
                    errorDate: true,
                })
            }
            if (time.length < 3) {
                this.setState({
                    errorTime: true,
                })
            }
        }
    };

    render(){

        const step1 =
            <>
                <Step1 handleNext={this.handleNext} handleRadioChange={this.handleRadioChange}/>
            </>;

        const step2 =
            <>
                <Step2 handleNext={this.handleNext} handlePrevious={this.handlePrevious}
                       handleSelectChange={(option, id) => this.handleSelectChange(this.props.selectedOption, id)}
                       optionValue={this.state.optionValue}/>
            </>;

        const step3 =
            <>
                <Step3 handleNext={this.handleNext} handlePrevious={this.handlePrevious} handleCheckboxChange={this.handleCheckboxChange}/>
            </>;

        const step4 =
            <>
                <Step4 handleSubmit={this.handleSubmit} handlePrevious={this.handlePrevious} handleChange={this.handleChange}
                       city={this.state.city} street={this.state.street} zipcode={this.state.zipcode}
                       phone={this.state.phone} date={this.state.date} time={this.state.time} notes={this.state.notes}
                       errorStreet={this.state.errorStreet} errorCity={this.state.errorCity} errorPostcode={this.state.errorPostcode}
                       errorPhone={this.state.errorPhone} errorDate={this.state.errorDate} errorTime={this.state.errorTime}
                />
            </>;

        const step5 =
            <>
                <Step5 handleNext={this.handleNext} handlePrevious={this.handlePrevious}
                       radioValue={this.state.radioValue} selectValue={this.state.selectedOption}
                       checkboxValue={this.state.checkboxValue} city={this.state.city} street={this.state.street} zipcode={this.state.zipcode}
                       phone={this.state.phone} date={this.state.date} time={this.state.time} notes={this.state.notes}
                />
            </>;
        const step6 =
            <>
                <Step6/>
            </>;

        const counter = this.state.counter;

        if (counter === 2) {
            return step2
        } else if (counter === 3) {
            return step3
        } else if (this.state.counter === 4) {
            return step4
        } else if (this.state.counter === 5) {
            return step5
        } else if (this.state.counter === 6) {
            return step6
        }
        return step1
    }
}

export default GiveThingsAwayForm;