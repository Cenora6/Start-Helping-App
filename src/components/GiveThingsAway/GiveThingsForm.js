import React, {Component} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import {withFirebase} from '../firebase/context';

class GiveThingsAwayForm extends Component {

    state = {
        counter: 1,
        radioValue: "",
        radioError: false,
        selectedOption: "",
        errorSelect: false,
        checkboxValues: [],
        selectedCityOrOrganization: "",
        errorStep3: false,
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
        donation: {},
    };

    handleNext = () => {

        if (this.state.counter === 1) {
            if (this.state.radioValue !== "") {
                this.setState({
                    counter: this.state.counter + 1,
                });
            } else {
                if (this.state.radioValue === "") {
                    this.setState({
                        radioError: true,
                    });
                }
            }
        } else if (this.state.counter === 2) {
            if (this.state.selectedOption !== "") {
                this.setState({
                    counter: this.state.counter + 1,
                });
            } else {
                if (this.state.selectedOption === "") {
                    this.setState({
                        errorSelect: true,
                    });
                }
            }
        } else if (this.state.counter === 3) {
            if (this.state.checkboxValues.length !== 0 && this.state.selectedCityOrOrganization !== "") {
                this.setState({
                    counter: this.state.counter + 1,
                });
            } else {
                if (this.state.checkboxValues === 0 || this.state.selectedCityOrOrganization === "") {
                    this.setState({
                        errorStep3: true,
                    });
                }
            }
        }
    };

    handlePrevious = () => {
        this.setState({
            radioError: false,
            errorSelect: false,
            errorCheckbox: false,
            errorStep3: false,
            counter: this.state.counter - 1,
        });
    };

    handlewriteOrganization = (e) => {
        this.setState({
            selectedCityOrOrganization: e.target.value,
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

    };

    handleSelectChange = (value) => {
        this.setState({
            selectedOption: value,
        });
    };

    handleSelectCityChange = (value) => {
        this.setState({
            selectedCityOrOrganization: value,
        });
    };

    handleCheckboxChange = (e) => {

        const checkboxValues = this.state.checkboxValues;
        let array;

        if (e.target.checked) {
            checkboxValues.push(e.target.value)
        } else {
            array = checkboxValues.indexOf(e.target.value);
            checkboxValues.splice(array, 1)
        }

        this.setState({
            checkboxValues: checkboxValues
        });
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

    handleConfirm = () => {

        const donation = {
            donation: {
                what: this.state.radioValue,
                howMany: this.state.selectedOption,
                where: this.state.selectedCityOrOrganization,
                who: this.state.checkboxValues,
                address: {street: this.state.street,
                    city: this.state.city,
                    zipcode: this.state.zipcode,
                    phone: this.state.phone,
                    date: this.state.date,
                    time: this.state.time,
                    notes: this.state.notes}
            }
        };

        this.setState({
            donation: donation,
        });

        const donationMap = Object.keys(donation).map(key => ({
            ...donation[key],
        }));

        this.props.firebase
            .addDonation()
            .add({
                donations: donationMap,
                email: sessionStorage.getItem("email"),
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        this.setState({
            counter: this.state.counter + 1,
        });
    };

    render(){

        const step1 =
            <>
                <Step1 handleNext={this.handleNext} handleRadioChange={this.handleRadioChange}
                       radioError={this.state.radioError}/>
            </>;

        const step2 =
            <>
                <Step2 handleNext={this.handleNext} handlePrevious={this.handlePrevious}
                       selectedOption={this.state.selectedOption}
                       handleSelectChange={this.handleSelectChange}
                       optionValue={this.state.optionValue} errorSelect={this.state.errorSelect}/>
            </>;

        const step3 =
            <>
                <Step3 handleNext={this.handleNext} handlePrevious={this.handlePrevious}
                       handleCheckboxChange={this.handleCheckboxChange} errorStep3={this.state.errorStep3}
                       handleSelectCityChange={this.handleSelectCityChange} selectedCityOrOrganization={this.state.selectedCityOrOrganization}
                       handlewriteOrganization={this.handlewriteOrganization}/>
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
                <Step5 handleConfirm={this.handleConfirm} handlePrevious={this.handlePrevious}
                       radioValue={this.state.radioValue} selectValue={this.state.selectedOption}
                       checkboxValues={this.state.checkboxValues} city={this.state.city} street={this.state.street}
                       zipcode={this.state.zipcode} phone={this.state.phone}
                       selectedCityOrOrganization={this.state.selectedCityOrOrganization} date={this.state.date}
                       time={this.state.time} notes={this.state.notes}
                />
            </>;
        const step6 =
            <>
                <Step6/>
            </>;

        const counter = this.state.counter;

        if(counter === 1) {
            return step1
        }
        if(counter === 2) {
            return step2
        }
        if(counter === 3) {
            return step3
        }
        if(counter === 4) {
            return step4
        }
        if(counter === 5) {
            return step5
        }
        if(counter === 6) {
            return step6
        }
    }
}

export default withFirebase(GiveThingsAwayForm);