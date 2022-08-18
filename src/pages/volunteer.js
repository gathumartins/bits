import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as volStyles from '../components/WhoWeAre/about.module.css';
import Layout from '../components/Layout';

function volunteer() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-Volunteer</title>
            </Helmet>
            <header className={volStyles.volunteerBanOut}>
                <div className={`${volStyles.historyBan} ${volStyles.volunterBan}`}>
                    <Container fluid={`md`}>
                        <Row>
                            <Col xs={12} sm={12} md={7} lg={7}>
                                <h2>We make a living by what we get, but we make a life by what we give.<br /> <cite>- Winston Churchill ·</cite></h2>
                                <ul className={`${volStyles.volBtnOuter}`}>
                                    <li className={`rounded text-center mb-3 ${volStyles.volBtn}`}><a href="https://nairobitshelp.zendesk.com/hc/en-us/requests/new?ticket_form_id=6817351621777" className="p-2" target="_blank" rel="noreferrer">Apply to Volunteer</a></li>
                                </ul>  
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} className="relative">
                                <img src="./imgs/volunteertop.png" fluid="true" alt="nairobits careers" className="absolute volImage" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <section className="py-14">
                <Container className={`${volStyles.volunteerMid}`}>
                    <p>Volunteers fuel our mission with an unmatched energy. They rekindle our passion whenever we are burning out and you could be one too!</p>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${volStyles.alumniMidInn}`}>
                        <div className={volStyles.alumni}>
                            <div className={volStyles.alumniITop}></div>
                            <h5>Co-deliver ICT training with us</h5>
                            <div className={volStyles.bottomLine}></div>
                        </div>
                        <div className={volStyles.alumni}>
                            <div className={volStyles.alumniITop}></div>
                            <h5>Help us mobilize</h5>
                            <div className={volStyles.bottomLine}></div>
                        </div>
                        <div className={volStyles.alumni}>
                            <div className={volStyles.alumniITop}></div>
                            <h5>Join our programs team</h5>
                            <div className={volStyles.bottomLine}></div>
                        </div>
                        <div className={volStyles.alumni}>
                            <div className={volStyles.alumniITop}></div>
                            <h5>Offer counselling sessions to our students</h5>
                            <div className={volStyles.bottomLine}></div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={volStyles.volBtm}>
                <Container fluid={`md`}>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h2>Why volunteer with us?</h2>
                            <p>More than helping us to fulfill our goals, volunteering builds the individual and you may decide to choose it for a variety of reasons.</p>
                            <p>First, volunteering offers people a chance to give back to their communities or simply make a difference in the lives of people who need it the most.</p>
                            <p>Volunteering with us assures you of experiencing the world through different lenses - it is a rollercoaster of meeting people with differing perspectives and realities. Over and beyond, volunteering is an opportunity to develop new skills or build on existing experience and knowledge.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={`${volStyles.volImg}`}>
                            <img src="./imgs/volunteermal.png" fluid="true" alt="nairobits careers" className="careerImg" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default volunteer;
