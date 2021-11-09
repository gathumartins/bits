import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function enterprenuership() {
    return (
        <Layout>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={7}>
                                    <h2>Entrepreneurship & Business Coaching</h2>
                                    <p>Preparing entrepreneurially gifted students for careers in business</p>
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
                                        <p>We believe in the potential of youth to create opportunities for each other through businesses and small scale enterprises. Over the years of our programming, we have seen many youth who develop concepts that make for good businesses if well nurtured and we sought to fill this gap.</p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>How</h3>
                                        <p>We work with entrepreneurs and SME owners to deliver business coaching to inspire creativity and innovation that leads to starting up businesses. Further work with entrepreneurially gifted students to tackle a variety of business topics, including financial awareness, management to the importance of branding and the power of social media tools in businesses to ensure that all students have all the necessary skills to start and manage their own businesses.</p>
                                    </div>
                                    <div className="programsWWW">
                                        <h3>What</h3>
                                        <p>The Entrepreneurship & Business Coaching program runs concurrently with the Innovation & Technology program and features coaching sessions on business Acumen.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                            <h4>Program partners</h4>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                <li className="d-flex align-items-center"><img src="../imgs/woven.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="clear"></div>
            <Support></Support>
        </Layout>
    )
}

export default enterprenuership;
