import React, {Component} from 'react';
import decoration from './../../assets/Decoration.svg'
import {Text} from "../Language/LanguageProvider";

class Step6 extends Component {

    render() {


        return (
            <>

                <section className='steps' id='form'>

                    <div className='thankYou'>
                        <p><Text tid="step59"/><br/><Text tid="step60"/></p>
                        <img src={decoration} alt={decoration}/>
                    </div>

                </section>
            </>
        )
    }
}

export default Step6;