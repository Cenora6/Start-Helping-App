import React, {Component} from 'react';
import decoration from './../../assets/Decoration.svg'

class Step6 extends Component {

    render() {


        return (
            <>

                <section className='steps' id='form'>

                    <div className='thankYou'>
                        <p>Dziękujemy za przesłanie formularza.<br/> Na maila prześlemy wszelkie informacje o odbiorze.</p>
                        <img src={decoration} alt={decoration}/>
                    </div>

                </section>
            </>
        )
    }
}

export default Step6;