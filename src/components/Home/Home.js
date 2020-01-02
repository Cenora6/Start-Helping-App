import React, {Component} from 'react';
import MainHeader from "./Header/MainHeader";
import ThreeColumns from "./ThreeColumns/ThreeColumns";

class Home extends Component {

    render() {
        return (
            <>
                <MainHeader/>
                <ThreeColumns/>
            </>
        )
    }
}

export default Home;