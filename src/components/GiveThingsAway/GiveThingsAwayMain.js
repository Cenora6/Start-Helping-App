import React, {Component} from 'react';
import ContactUs from "../Home/ContactUs/ContactUs";
import GiveThingsAwayHeader from "./GiveThingsHeader";
import GiveThingsAwayForm from "./GiveThingsForm";

class GiveThingsAwayMain extends Component {

    render() {

        return (
            <>
                <GiveThingsAwayHeader/>
                <GiveThingsAwayForm/>
                <ContactUs/>
            </>
        )
    }
}

export default GiveThingsAwayMain;