import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function amp() {
    return (
        <Layout>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={7}>
                                    <h2>Advanced Multimedia Program</h2>
                                    <p>A 9 month apprenticeship diploma specialization in design or coding</p>
                                </Col>
                                <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                    <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                        <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/ts_9sPW-mW0"></iframe>
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
                                        <p>By any measure, challenges facing underserved youth are endless. In the same breath, opportunities in the digital economy are endless and are ever evolving as we delve into the future. The digital transformation is deep, enduring and dynamic with new technologies effortlessly crossing borders and revolutionizing economies, ultimately changing the way we know life. Forbes states that Coding and empathy are the foundational skills for the future of work. It is therefore important to prepare tech leaders who will lead the way into the future. </p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>How</h3>
                                        <p>After attending 12 weeks in the Digital Literacy Program, a select number of youth proceed to the Advanced Multimedia Program to deepen their skills in the Information Communication and Technology space. The students get a chance to specialize either in Front end Web Development and Multidisciplinary design. After 6 months in the program, students have to go for a mandatory 3 month internship before graduating with their diplomas.</p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>What</h3>
                                        <p>The Advanced Multimedia program is a 9 month program taught by industry experts to train top-tier tech graduates in web development & multidisciplinary design.</p>
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
    )
}

export default amp;
