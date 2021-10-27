import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function vit() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>Video Impact Training</h2>
                                        <p>1 Week training that produces mobile storytellers</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/sfsc5vpZmpg"></iframe>
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
                                            <p>The digital age has accelerated the demand for video stories across online and social media platforms. This boom has completely changed the way people consume content across the world. The need to tell good stories in an impactful manner is greater today than ever before. Organizations and communities need creatives who can showcase their unique stories to meet their communication goals . We are convinced that young people, regardless of their backgrounds, will play a key role in meeting this demand. It is important to harness the power of these youth and walk them through processes that channel their creative genius to tell stories of impact and resilience for different audiences. </p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>NairoBits has partnered with Golypoon Foundation to offer Video Impact Training. Participants of the V.I.T. learn all skills necessary to use their smartphones to create, tell and upload video stories for clients. VIT offers professional training on storytelling infused with best practices and real client cases to prepare the participants to communicate stories of their communities and ultimately secure jobs in the communication industry.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>What</h3>
                                            <p>The Video Impact Training is a 1 week program offered twice a year (March & October) for a cohort of 30 students per training.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><img src="../imgs/golypon.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
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

export default vit;
