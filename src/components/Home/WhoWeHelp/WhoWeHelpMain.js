import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import organizations from './../../database/organizations.json';
console.log(organizations);

class WhoWeHelpMain extends Component {
    state = {
        visibleSite : 1,
        allButtons: 2,
        activePage: 1,
    };

    changeActivePage = (passedButtonNumber) => {
        this.setState({
            activePage: passedButtonNumber
        })
    };

    changePage = (id) => {
        let buttonNumber;

        let organizationsNumber = parseInt(organizations.organizations[id].items.length, 10);

        if (organizationsNumber % 3 === 0) {
            buttonNumber = organizationsNumber / 3;
        } else if (organizationsNumber === 3) {
            buttonNumber = 0;
        }

        this.setState({
            visibleSite: id,
            allButtons: buttonNumber,
        });


    };

    showButtons = () => {
        let buttons = [];
        for (let i = 1; i <= this.state.allButtons; i++) {
            buttons.push(
                <button key={i} onClick={ () => this.changeActivePage(i)} className="buttonDisplay">{i}</button>
            );
        }
        return buttons;
    };


    buildList = () => {
        let itemArray = organizations.organizations[this.state.visibleSite].items;
        console.log(itemArray);

        return (
            <section className='foundation'>
                {itemArray.map( (item, index) => {
                    return (
                        <article className='foundationList' key={index}>
                            <div className='foundationName'>
                                <h3>{item.name}</h3>
                                <p>Cel i misja: {item.mission}</p>
                            </div>
                            <div className='foundationDonations'>
                                <p>{item.donations}</p>
                            </div>
                        </article>
                    )
                })}
            </section>
        );
    };


    render() {

        let buttonList;
        buttonList = this.showButtons();

        let foundationList;
        foundationList = this.buildList();

        return (
            <section className='whoWeHelp' id='whoWeHelp'>
                <div className='whoWeHelpDesc'>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt='decoration'/>
                    <ul className='organizationType'>
                        <li id='1' onClick={() => this.changePage(0)}>{organizations.organizations[0].name}</li>
                        <li id='2' onClick={() => this.changePage(1)}>{organizations.organizations[1].name}</li>
                        <li id='3' onClick={() => this.changePage(2)}>{organizations.organizations[2].name}</li>
                    </ul>
                    <p className='organizationDescription'>
                        {organizations.organizations[this.state.visibleSite].description}
                    </p>
                </div>
                {foundationList}
                <div className='showButtonsStyle'>
                    {buttonList}
                </div>
            </section>
        )
    }
}

export default WhoWeHelpMain;