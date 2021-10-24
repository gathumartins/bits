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
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Digital Literacy Program</h5>
                                                    <p>A 12-week course for novice youth</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Advanced Multimedia Program</h5>
                                                    <p>A 9 month apprenticeship diploma specialization in design or coding</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Video Impact Training</h5>
                                                    <p>1 Week training that produces mobile storytellers</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Core Acumen</h5>
                                                    <p>Complimentary programs that promote responsible living</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Labour Market Integration</h5>
                                                    <p>Facilitating entry to the labour market through volunteerships, internships and corporate learning programs</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                        </div>
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
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Entrepreneurship & Business Coaching</h5>
                                                    <p>Preparing entrepreneurially gifted students for careers in business</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Right Here Right Now 2</h5>
                                                    <p>A 5 year consortium for the nationwide SRHR change</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>Youth in Action</h5>
                                                    <p>Empowering youth to gain skills, voice, and participate in youth-identified policy priorities in Kenya regarding sexual and reproductive health and rights</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                        </div>
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
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>#WeAreBits</h5>
                                                    <p>Preparing entrepreneurially gifted students for careers in business</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                            <div>
                                                <div className={proStyles.progsTop}>
                                                    <h5>S-Bize</h5>
                                                    <p>A 5 year consortium for the nationwide SRHR change</p>
                                                </div>
                                                <div className={proStyles.progsBtm}></div>
                                            </div>
                                        </div>
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
