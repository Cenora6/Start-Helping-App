import React, {Component} from 'react';

class Step1 extends Component {

    render() {

        return (
            <>
                <div className='warningStep'>
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>

                <div className='step1'>
                    <span className='stepNum'>Krok 1/4</span>
                    <span className='choose'>Zaznacz co chcesz oddać:</span>
                    <form className='checkboxForm'>
                        <div className='checkboxOptions'>
                            <input type='checkbox'/>
                            <span>ubrania, które nadają się do ponownego użycia</span>
                        </div>
                        <div className='checkboxOptions'>
                            <input type='checkbox'/>
                            <span>ubrania, do wyrzucenia</span>
                        </div>
                        <div className='checkboxOptions'>
                            <input type='checkbox'/>
                            <span>zabawki</span>
                        </div>
                        <div className='checkboxOptions'>
                            <input type='checkbox'/>
                            <span>książki</span>
                        </div>
                        <div className='checkboxOptions'>
                            <input type='checkbox'/>
                            <span>inne</span>
                        </div>
                    </form>
                    <span className='nextButton'>Dalej</span>
                </div>
            </>
        )
    }
}

export default Step1;