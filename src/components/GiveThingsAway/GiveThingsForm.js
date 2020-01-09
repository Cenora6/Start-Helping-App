import React, {Component} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

class GiveThingsAwayForm extends Component {

    state = {
        counter: 1,
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


    render() {


        const step1 =
            <>
                <Step1 handleNext={this.handleNext}/>
            </>;

        const step2 =
            <>
                <Step2 handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
            </>;

        const step3 =
            <>
                <Step3 handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
            </>;

        const step4 =
            <>
                <Step4 handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
            </>;


        const counter = this.state.counter

        if (counter === 2) {
            return step2
        } else if (counter === 3) {
            return step3
        } else if (this.state.counter === 4) {
            return step4
            // } else if (this.state.counter === 5) {
            //     return step5
            // } else if (this.state.counter === 6) {
            //     return step6
        }
        return step1
    }
}

export default GiveThingsAwayForm;