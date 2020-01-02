import React, {Component} from 'react';
import MainHeader from "./Header/MainHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import StepsMain from "./ThreeSimpleSteps/StepsMain";

class Home extends Component {

    render() {
        return (
            <>
                <MainHeader/>
                <ThreeColumns/>
                <StepsMain/>
            </>
        )
    }
}

export default Home;