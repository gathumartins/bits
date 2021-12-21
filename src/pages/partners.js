import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PartnersList from '../components/Home/PartnersList';
import * as teamStyles from '../components/WhoWeAre/about.module.css';
;
function partners() {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>NairoBits-Partners</title>
                </Helmet>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={`text-center ${teamStyles.teamTop}`}>
                                <h2>Our partners</h2>
                                <p className={teamStyles.teamTopPar}>We welcome you to join the bandwagon below and co-create solutions to some of the world’s pressing challenges with those in need. Work with us to change the lives of disadvantaged youth in Kenya.</p>
                            </Container>
                        </header>
                    </div>
                </section>
                <section className={teamStyles.partnersTopSect}>
                    <Container fluid={`md`}>
                        <h2>They trust us</h2>
                        <PartnersList />
                        <Row>
                            <Col xs={12}>
                                <h3>List of all partners</h3>
                            </Col>
                            <Col xs={12} className={teamStyles.partnersTopList}>
                                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <li>Aga Khan Foundation</li>
                                    <li>AMREF</li>
                                    <li>British Council</li>
                                    <li>Butterfly works</li>
                                    <li>CELO</li>
                                    <li>Edukans</li>
                                    <li>Edmund Rice</li>
                                    <li>Fairtrade Africa</li>
                                    <li>Go down Arts Centre</li>
                                    <li>Google</li>
                                    <li>Human Needs Project</li>
                                    <li>IDEO </li>
                                    <li>London School of Economics</li>
                                    <li>Malala Fund</li>
                                    <li>Mercy Corps</li>
                                    <li>Mirror of Hope</li>
                                    <li>MKONO</li>
                                    <li>Nyendo.lernen </li>
                                    <li>Oasis Mathare</li>
                                    <li>Oppia</li>
                                    <li>Ruben Centre</li>
                                    <li>Rutgers</li>
                                    <li>SWIFT</li>
                                    <li>Team4Tech</li>
                                    <li>Terre des Hommes</li>
                                    <li>Wanawake kwa Wanawake</li>
                                    <li>Woven Link</li>
                                    <li>YouLead</li>
                                    <li>Youth Bridge Trust</li>
                                    <li>Youth Initiative Kenya</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={teamStyles.partnerOp}>
                    <Container className={`py-14 ${teamStyles.alumniMid}`} fluid={`md`}>
                        <h4>Here are available partnership opportunities. Write to us to propose a partnership and we will be in touch!</h4>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${teamStyles.alumniMidInn}`}>
                            <div className={teamStyles.alumni}>
                                <div className={teamStyles.alumniITop}></div>
                                <h5>Corporate Sponsorships</h5>
                                <div className={teamStyles.bottomLine}></div>
                                <div className={teamStyles.partnersOpBtm}>
                                    <p>Support our work through donations, grants and individual sponsorships</p>
                                </div>
                            </div>
                            <div className={teamStyles.alumni}>
                                <div className={teamStyles.alumniITop}></div>
                                <h5>Volunteer Engagements</h5>
                                <div className={teamStyles.bottomLine}></div>
                                <div className={teamStyles.partnersOpBtm}>
                                    <p>Volunteer time to increase our impact through supporting training or operations</p>
                                </div>
                            </div>
                            <div className={teamStyles.alumni}>
                                <div className={teamStyles.alumniITop}></div>
                                <h5>Business <br /> Partnership</h5>
                                <div className={teamStyles.bottomLine}></div>
                                <div className={teamStyles.partnersOpBtm}>
                                    <p>Support wholesome learning by employing interns and feeding into business intelligence</p>
                                </div>
                            </div>
                            <div className={teamStyles.alumni}>
                                <div className={teamStyles.alumniITop}></div>
                                <h5>Program <br /> Partnership</h5>
                                <div className={teamStyles.bottomLine}></div>
                                <div className={teamStyles.partnersOpBtm}>
                                    <p>Do you have a program/project which can benefit from the NairoBits intelligence?</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className={teamStyles.partnersBttm}>
                    <Container fluid={`md`}>
                        <section className="studentBtmInn">
                            <Row>
                                <Col className="md:mb-5 d-flex align-items-center" xs={12} sm={12} md={6}>
                                    <h2>Why partner with us?</h2>
                                </Col>
                                <Col className="md:mb-5 d-flex align-items-center" xs={12} sm={12} md={6}>
                                    <ul>
                                        <li>Contribution to your Corporate Social Responsibility through employee volunteering for social development initiatives</li>
                                        <li>Promoting skills transfer</li>
                                        <li>Long term on-ground engagement & authentic touch points with beneficiaries.</li>
                                        <li>Contribution to Sustainable development</li>
                                        <li>NairoBits is an actor under SDG 4, 8 & 10</li>
                                    </ul>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </section>
            </Layout>
        </div>
    )
}

export default partners;
