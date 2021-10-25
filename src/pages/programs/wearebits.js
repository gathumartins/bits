import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function wearebits() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>#WeAreBits</h2>
                                        <p>Connecting all the Bits Schools across the globe for cross learning.</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
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
                                            <p>The NairoBits Model has been successfully replicates in Uganda (AruaBits & KampaBits), Nigeria (EdoBits & EkoBits) and Somaliland (HargaBits & GaroBits). With the wide expansion of Bits Schools across several African cities after nearly two decades in operation, a clear need for a centralized way to manage and unify them into a solid network was identified.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>#WeAreBits is a consortium whose mission is to support the sustainability and build the scale and capacity of a network of Bits Schools and other implementing partners in Africa and beyond.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>What</h3>
                                            <p>With combined expertise fields in curriculum development, programmatic implementations of large-scale projects in several African cities, and monitoring and evaluation, the current responsibilities of WeAreBits pertain to overseeing and steering strategy, fundraising, communication, compliance, programs, monitoring and evaluation, finance, organizational and HR development for all the Bits Schools.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><img src="../imgs/aruabits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/ekobits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/hargabits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/kampabits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/garobits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/edobits.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
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

export default wearebits;
