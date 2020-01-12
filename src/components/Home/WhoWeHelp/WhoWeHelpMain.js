import React, {Component} from 'react';
import decoration from '../../../assets/Decoration.svg'
import organizations from './../../database/organizations.json';
import {Link} from "react-router-dom";

class WhoWeHelpMain extends Component {
    state = {
        visibleOrganizationType : 0,
        allButtons: 3,
        itemsPerPage: 3,
        currentPage: 1,
        active: "",
        width: window.innerWidth,
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
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

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        let buttonList;
        buttonList = this.showButtons();

        let foundationList;
        foundationList = this.buildList();

        const allOrganizations = organizations.organizations;

        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            if (sessionStorage.getItem("email") == null) {
                return (
                    <section className='whoWeHelp' id='whoWeHelp'>
                        <div className='whoWeHelpDesc'>
                            <h2>Komu pomagamy?</h2>
                            <img src={decoration} alt='decoration'/>
                            <ul className='organizationType'>
                                {allOrganizations.map((organization, index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <span>{organization.name}</span>
                                                <p>{organization.description}</p>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className='registerTitle'>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</div>
                        <div className='registerButton hoverLink'>
                            <Link to='/rejestracja' style={buttonStyle} className='hoverLink'>
                                <p>Załóż konto</p>
                            </Link>
                        </div>
                    </section>
                )
            } else {
                return (
                    <section className='whoWeHelp' id='whoWeHelp'>
                        <div className='whoWeHelpDesc'>
                            <h2>Komu pomagamy?</h2>
                            <img src={decoration} alt='decoration'/>
                            <ul className='organizationType'>
                                {allOrganizations.map((organization, index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <span>{organization.name}</span>
                                                <p>{organization.description}</p>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className='registerTitle'>Chcesz oddać swoje rzeczy lub zorganizować zbiórkę lokalną?</div>
                        <div className='registerButton hoverLink buttonsAfterLogin'>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
                                <p className='firstButton'>Oddaj rzeczy</p>
                            </Link>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
                                <p>Zorganizuj zbiórkę</p>
                            </Link>
                        </div>
                    </section>
                )
            }
        } else {
            return (
                <section className='whoWeHelp' id='whoWeHelp'>
                    <div className='whoWeHelpDesc'>
                        <h2>Komu pomagamy?</h2>
                        <img src={decoration} alt='decoration'/>
                        <ul className='organizationType'>

                            {allOrganizations.map((organization, index) => {
                                return <li key={index}
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
}

export default WhoWeHelpMain;