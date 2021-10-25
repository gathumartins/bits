import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function coreacumen() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>Core Acumen</h2>
                                        <p>Complimentary programs that promote responsible living</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/-IGdStk7pC0"></iframe>
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
                                            <p>The importance of building all rounded individuals rings true today more than ever. It is simply not enough to be technically skilled only. One has to be cognizant of the harsh realities of the world they live in, the environment they work in and the people they interact with. </p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>As a complementarity to our Innovation & Technology program, we train and mentor young people to build their life skills, mentor them to become solution builders and offer information on issues that affect them including sexual & reproductive health and job preparedness. Our students’ skills are advanced using various techniques such as mentorship, company visits to get real time market relevant advice, peer to peer exchange forums and guest trainers who share their life experiences and offer guidance.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>What</h3>
                                            <p>The Core Acumen program is delivered throughout the lifetime of the Innovation & Technology program to ensure we are releasing holistic graduates to the market.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><img src="../imgs/edukans.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Support></Support>
            </Layout>
        </div>
    )
}

export default coreacumen;
