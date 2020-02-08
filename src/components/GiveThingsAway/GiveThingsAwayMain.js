import React, {Component} from 'react';
import ContactUs from "../Home/ContactUs/ContactUs";
import GiveThingsAwayHeader from "./GiveThingsHeader";
import GiveThingsAwayForm from "./GiveThingsForm";
import ScrollUpButton from "react-scroll-up-button";

class GiveThingsAwayMain extends Component {

    render() {

        return (
            <>
                <ScrollUpButton />
                <GiveThingsAwayHeader/>
                <GiveThingsAwayForm/>
                <ContactUs/>
            </>
        )
    }
}

export default GiveThingsAwayMain;