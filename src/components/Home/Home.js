import React, {Component} from 'react';
import MainHeader from "./Header/MainHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import StepsMain from "./ThreeSimpleSteps/StepsMain";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelpMain from "./WhoWeHelp/WhoWeHelpMain";
import ContactUs from "./ContactUs/ContactUs";

class Home extends Component {

    render() {
        return (
            <>
                <MainHeader/>
                <ThreeColumns/>
                <StepsMain/>
                <AboutUs/>
                <WhoWeHelpMain/>
                <ContactUs/>
            </>
        )
    }
}

export default Home;