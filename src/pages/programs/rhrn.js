import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function rhrn() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>RightHereRightNow 2</h2>
                                        <p>A 5 year consortium for the nationwide SRHR change</p>
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
                                            <p>Kenya, is at the cusp of a demographic dividend with its burgeoning youthful population that is estimated to continue to grow substantially (UNFPA, 2015). This demographic that accounts for 10% of the population aged 15 - 19 faces numerous reproductive health problems including HIV infection, teenage pregnancy, early marriage, child-bearing and female circumcision. These challenges are exacerbated by early sexual debut and inadequate sexual and reproductive health information for informed decision making.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>The Kenya Right Here Right Now 2 program is a coalition of 7 organizations that seek to implement a robust forward looking innovative locally rooted, youth-led, cost effective programme that underpins its interventions around meaningful involvement of adolescents and young people to be implemented in the larger Nairobi Metropolis.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>The program aims to work with young people to:</h3>
                                            <ul>
                                                <li>Empower them to make decisions about their sexuality, voice their needs and claim their rights.</li>
                                                <li>Increase Public Support for young people’s SRHR and gender justice. </li>
                                                <li>Advocate for the government to adopt, implement and account for Human rights-based Policies and laws that enable young people’s SRHR and Gender justice.</li>
                                                <li> Strengthen civil society for young people’s SRHR and gender justice.</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><img src="../imgs/rhrn.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/naya.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/lovemat.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/srhr.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><img src="../imgs/csa.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
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

export default rhrn;
