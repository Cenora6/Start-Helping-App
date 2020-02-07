import React, {Component} from 'react';
import {withFirebase} from "../../firebase/context";
import {Link} from "react-router-dom";
import {Text} from "../../Language/LanguageProvider";

class ThreeColumns extends Component {
    state = {
        width: window.innerWidth,
        fundations: [],
        bags: [],
    };

    componentDidMount() {
        if(sessionStorage.getItem("email") == null) {
            this.getData();
        } else {
            this.getDataDonation();
        }
        window.addEventListener('resize', this.handleWindowSizeChange);
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
                        const bags = donation.donations.howMany;

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

    getData = () => {
        this.props.firebase
            .getDonation()
            .get()
            .then((donations => {
                    let bagsArray = [];
                    let donationsArray = [];

                    donations.forEach(doc => {
                        const donations = doc.data();
                        donationsArray.push(donations);

                        const donationsNumber = donationsArray.length;
                        const bags = donations.donations.howMany;
                        bagsArray.push(bags);
                        const bagsSum = bagsArray.reduce((sum1, sum2) => sum1 + sum2);

                        this.setState({
                            fundations: donationsNumber,
                            bags: bagsSum,
                        })

                    });
                })
            )

    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const buttonStyle = {
            textDecoration: "none",
            paddingTop: "2.3125rem",
            color: "#3C3C3C",
        };
        const { width } = this.state;
        const isMobile = width <= 767;

        if (isMobile) {
            return (
                <>
                    <div className='summary' id='summary'>
                        <div className='mobileSummaryTitle'>
                            <Text tid="headerTitle3a"/><br/><Text tid="headerTitle3b"/>
                        </div>
                        <div className='summaryStatistics'>
                            <div className='statistics'>
                                <span>{this.state.bags}</span>
                                <p><Text tid="threeColumns1"/></p>
                            </div>
                            <div className='statistics'>
                                <span>{this.state.fundations}</span>
                                <p><Text tid="threeColumns2"/></p>
                            </div>
                            <div className='statistics'>
                                <span>{parseInt(this.state.bags) - parseInt(this.state.fundations)}</span>
                                <p><Text tid="threeColumns3"/></p>
                            </div>

                        </div>
                        <div className='headerButtons buttonsAfterLogin'>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
                                <p className='firstButton'><Text tid="logReg3"/></p>
                            </Link>
                            <Link to='/oddaj-rzeczy' style={buttonStyle} className='hoverLink'>
                                <p><Text tid="threeColumns4"/></p>
                            </Link>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <section className='threeColumns'>
                    <div className='oneColumn'>
                        <h2>{this.state.bags}</h2>
                        <span><Text tid="threeColumns1"/></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='oneColumn'>
                        <h2>{this.state.fundations}</h2>
                        <span><Text tid="threeColumns2"/></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='oneColumn'>
                        <h2>{parseInt(this.state.bags) - parseInt(this.state.fundations)}</h2>
                        <span><Text tid="threeColumns3"/></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </section>
            )
        }
    }
}

export default withFirebase(ThreeColumns);