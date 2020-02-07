import React, {Component} from 'react';
import creators from '../../../assets/People.jpg'
import decoration from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";
import {Text} from "../../Language/LanguageProvider";

class AboutUs extends Component {

    render() {

        return (

            <section className='aboutUs' id='aboutUs'>
                <div className='aboutUsText'>
                    <h2><Text tid="aboutUs"/></h2>
                    <img src={decoration} alt='decoration'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className='signatureImage'>
                        <img src={signature} alt='signature'/>
                    </div>
                </div>
                <div className='aboutUsImage'>
                    <img src={creators} alt='creators'/>
                </div>
            </section>
        )
    }
}

export default AboutUs;