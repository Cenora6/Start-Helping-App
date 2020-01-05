import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import organizations from './../../database/organizations.json';

class WhoWeHelpMain extends Component {
    state = {
        visibleOrganizationType : 0,
        allButtons: 3,
        itemsPerPage: 3,
        currentPage: 1,
        active: "",
    };

    changeOrganization = (e, i) => {

        let buttonNumber;
        const organizationsNumber = parseInt(organizations.organizations[i].items.length, 10);

        if (organizationsNumber !== 3 && organizationsNumber % 3 === 0) {
            buttonNumber = organizationsNumber / 3;
        } else if (organizationsNumber === 3) {
            buttonNumber = 0;
        }

        this.setState({
            visibleOrganizationType: i,
            allButtons: buttonNumber,
            currentPage: 1,
            active: i,
        });
    };

    changeSite = (e, i) => {

        this.setState({
            currentPage: i,
            active: i,
        });
    };

    showButtons = () => {
        let buttons = [];
        for (let i = 1; i <= this.state.allButtons; i++) {
            buttons.push(
                <button key={i}
                        onClick={ (e) => this.changeSite(e, i)}
                        className={`buttonDisplay ${this.state.currentPage === i ? "active" : ""}`}>{i}</button>
            );
        }
        return buttons;
    };

    buildList = () => {

        const {currentPage, itemsPerPage, visibleOrganizationType} = this.state;
        const itemArray = organizations.organizations[visibleOrganizationType].items;

        const indexLast = currentPage * itemsPerPage;
        const indexFirst = indexLast - itemsPerPage;
        const currentFoundations = itemArray.slice(indexFirst, indexLast);

        return (
            <section className='foundation'>
                {currentFoundations.map( (item, index) => {
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

        const allOrganizations = organizations.organizations;

        return (
            <section className='whoWeHelp' id='whoWeHelp'>
                <div className='whoWeHelpDesc'>
                    <h2>Komu pomagamy?</h2>
                    <img src={decoration} alt='decoration'/>
                    <ul className='organizationType'>

                        {allOrganizations.map((organization, index) => {
                            console.log("index", index);
                            console.log("organizacja:", this.state.visibleOrganizationType);
                            return <li id={index}
                                       onClick={(e) => this.changeOrganization(e, index)}
                                       className={this.state.visibleOrganizationType === index ? "active" : ""}>{organization.name}</li>

                        })}

                    </ul>
                    <p className='organizationDescription'>
                        {organizations.organizations[this.state.visibleOrganizationType].description}
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