import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {withFirebase} from '../firebase/context';

class Summary extends Component {
    state = {
        fundations: [],
        bags: [],

    };

    componentDidMount() {
        this.getDataDonation();
    }

    getDataDonation = () => {

        const email = sessionStorage.getItem("email");

        this.props.firebase.getDonation().where("email", "==", email)
            .get()
            .then((donations => {
                    const donationsNumber = [];
                    const bagsArray = [];

                    donations.forEach(doc => {
                        const donation = doc.data();
                        donation.id = doc.id;
                        const bags = donation.donations[0].howMany;

                        donationsNumber.push(donation);
                        bagsArray.push(bags);

                    });

                    const allBags = bagsArray.reduce((a, b) => a + b, 0);
                    this.setState({
                        fundations: donationsNumber.length,
                        bags: allBags,
                    })
                })
            )
    };

    render() {

        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };

        return (
            <>
                <div className='summary' id='summary'>
                    <div className='mobileSummaryTitle'>
                        Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce
                    </div>
                    <div className='summaryStatistics'>
                        <div className='statistics'>
                            <span>{this.state.bags}</span>
                            <p>oddanych worków</p>
                        </div>
                        <div className='statistics'>
                            <span>{this.state.fundations}</span>
                            <p>wspartych organizacji</p>
                        </div>
                        <div className='statistics'>
                            <span>0</span>
                            <p>zorganizowanych zbiórek</p>
                        </div>

                    </div>
                    <div className='headerButtons buttonsAfterLogin'>
                        <Link to='/oddaj-rzeczy'  style={buttonStyle}  className='hoverLink'>
                            <p className='firstButton'>Oddaj rzeczy</p>
                        </Link>
                        <Link to='/oddaj-rzeczy'  style={buttonStyle}  className='hoverLink'>
                            <p>Zorganizuj zbiórkę</p>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default withFirebase(Summary);