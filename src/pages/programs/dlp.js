import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function dlp() {
    return (
        <Layout>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={7}>
                                    <h2>Digital Literacy Program</h2>
                                    <p>A 12-week course for novice youth</p>
                                </Col>
                                <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                    <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                        <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/b3rQjNHCQhw"></iframe>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </header>
                </div>
            </section>
            <section>
                <Container fluid={`md`} className="programSCont relative">
                    <Row className={`${proStyles.programContInn}`}>
                        <Col xs={12} sm={12} md={7}>
                            <div className="d-flex align-items-strecth">
                                <div className="d-flex align-items-strecth">
                                    <div className="programleftStripe mr-5">
                                        <div className="stripeTop"></div>
                                        <div className="programStripe"></div>
                                    </div>
                                </div>
                                <div className="programsWWWCont">

                                    <div className="programsWWW">
                                        <h3>Why</h3>
                                        <p>Youth unemployment across the globe is on a steady rise. For many, access to work opportunities are impeded by an increasing lack of job opportunities and the barriers that impede smooth entry into the labor market - low technical capacity, limited work experience and the stiff competition brought about by the ever increasing population. </p>
                                        <p>The issues that lead to un/under employment especially in African countries are compounded for underserved young people i.e. Those living in informal settlements and those from disadvantaged backgrounds. They face social inequalities including marginalization, poor living conditions and limited access to services which perpetuate the cycle of poverty in their lives - and their communities too.</p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>How</h3>
                                        <p>We are living in a digital era as demonstrated by worldwide transformations within the 3rd and 4th industrial revolution. The digital economy is skills-oriented as opposed to education heavy and as such, it provides opportunities for all regardless of educational or social background. Yet, even for the digital space, underserved youth lack the ability to make gainful advantage from tech opportunities because they lack access to training - which is mostly unavailable or available in low quality - and expensive equipment - which they cannot afford.</p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>What</h3>
                                        <p>We work with underserved young people aged 17 - 24 from Nairobi’s informal settlements and poor backgrounds to set them off for an impactful career in the tech sector. Our curriculum has been specially designed to fit market needs to ensure its relevance and is constantly updated after thorough market surveys. It also fits a prudent teaching framework that has been developed over 22 years to ensure the students get the most out of the training.</p>
                                        <p> The Digital Literacy Program runs for 12-Week and is offered in our community based hosting centres across Kangemi, Kariobangi, Kibera and Mukuru </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                            <h4>Program partners</h4>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                <li className="d-flex align-items-center"><img src="../imgs/yike.png" alt="NairBits Diligital Literacy partners YIKE" /></li>
                                <li className="d-flex align-items-center"><img src="../imgs/wkw.png" alt="NairBits Diligital Literacy partners WKW" /></li>
                                <li className="d-flex align-items-center"><img src="../imgs/mukuru.png" alt="NairBits Diligital Literacy partners MUKURU" /></li>
                                <li className="d-flex align-items-center"><img src="../imgs/moh.png" alt="NairBits Diligital Literacy partners MOH" /></li>
                                <li className="d-flex align-items-center"><img src="../imgs/hnp.png" alt="NairBits Diligital Literacy partners HNP" /></li>
                                <li className="d-flex align-items-center"><img src="../imgs/nyendo.png" alt="NairBits Diligital Literacy partners NYENDO" /></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Support></Support>
        </Layout>
    )
}

export default dlp;
