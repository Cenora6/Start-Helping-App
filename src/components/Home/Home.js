import React, {Component} from 'react';
import MainHeader from "./Header/MainHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import StepsMain from "./ThreeSimpleSteps/StepsMain";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelpMain from "./WhoWeHelp/WhoWeHelpMain";
import ContactUs from "./ContactUs/ContactUs";
import Navigation from "./Header/Navigation";
import HeaderTitle from "./Header/HeaderTitle";
import Summary from "../GiveThingsAway/Summary";

class Home extends Component {

    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
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
            if (sessionStorage.getItem("email") == null) {
                return (
                    <>
                        <Navigation/>
                        <HeaderTitle/>
                        <StepsMain/>
                        <WhoWeHelpMain/>
                        <ContactUs/>
                    </>
                )
            } else {
                return (
                    <>
                        <Navigation/>
                        <Summary/>
                        <StepsMain/>
                        <WhoWeHelpMain/>
                        <ContactUs/>
                    </>
                )
            }

        } else {
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
}

export default Home;