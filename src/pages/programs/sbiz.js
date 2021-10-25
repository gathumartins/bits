import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function sbize() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>S-Bize</h2>
                                        <p>Working with international MBA students to create solutions for local organizations</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/zxHZR6zQkB4"></iframe>
                                        </figure>
                                    </Col>
                                </Row>
                            </Container>
                        </header>
                    </div>
                </section>
                <section>
                    <Container fluid={`md`} className="programCont relative">
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
                                            <p>Insufficient research is a huge impediment to developmental growth and success in any field. As Africa tries to catch up with the rest of the world, the continent produces less than 1% of the global research output. Meanwhile, academicians across the world use hypothetical scenarios to train the next generation of development practitioners. </p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>NairoBits has partnered with the London School of Economics to have their Masters Students of Social Entrepreneurship consult for organizations and SMEs in Kenyan slums. They undertake research on the industry of the enterprise and develop business solutions for them.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>The project aims to;</h3>
                                            <p>The SBize program is a 9 month program that produces Social Business Models for Social Enterprises in Kenya</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><img src="../imgs/lse.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="clear"></div>
                <Support></Support>
            </Layout>
        </div>
    )
}

export default sbize;
