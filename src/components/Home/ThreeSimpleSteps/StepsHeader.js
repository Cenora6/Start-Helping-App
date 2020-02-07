import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import {Text} from "../../Language/LanguageProvider";

class StepsHeader extends Component {

    render() {
        return (
            <div className='stepsTitle' id='whatIsIt'>
                <h2><Text tid="stepsHeader"/></h2>
                <img src={decoration} alt='decoration'/>
            </div>
        )
    }
}

export default StepsHeader;