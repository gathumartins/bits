import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../components/WhatWeDo/Programs.module.css';
import Layout from '../components/Layout';

function programs() {
    return (
        <Layout>
            <section className="commonbgOuter">
                <div className="commonMidBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <h2>Programs</h2>
                                    <p>NairoBits is governed by a Board of Trustees mandated to with ensuring the organization’s strategic guidance and operational goodwill for all the difference we want to make in the world</p>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <figure></figure>
                                </Col>
                            </Row>
                        </Container>
                    </header>
                    <article>
                        <section className={proStyles.proConts}>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNums}`}>01</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Innovation & Technology</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>Increasing job job readiness and pathways for employment in the ICT space for young people through technical guidance, prudent training methodologies and continuous mentorship, students increase</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNumsTwo}`}>02</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Acumen Programs</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>Programs that seek to deal with the realities that our youth live in and awakening youth to those realities</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNumsThree}`}>03</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Global Technical & Cultural Exchange Programs</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>In creating world-wide opportunities, we partner with international institutions for knowledge sharing and increasing the opportunity base for collaboration and cultural exchange.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </section>
                        <section className={`${proStyles.proBtm} grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3`}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </section>
                    </article>
                </div>
            </section>
        </Layout>
    )
}

export default programs;
