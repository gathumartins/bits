import React from 'react';
import { Helmet } from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../components/WhatWeDo/Programs.module.css';
import Layout from '../components/Layout';

function apply() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-Apply</title>
            </Helmet>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={12} >
                                    <h2 className="text-center">Apply</h2>
                                    <p className="text-center mx-auto">Here are a couple of open opportunities that you can apply for to be part of a NairoBits Program</p>
                                </Col>
                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ${proStyles.appCont}`}>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for Advanced Multimedia Program</h3>
                                            <h4>Deadline: Applications Closed</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/amp" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="/" className="my-2 applybtn">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for the Digital Literacy Program</h3>
                                            <h4>Deadline: Applications Closed</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/dlp" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="/" className="my-2 applybtn">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for the S-Bize Program</h3>
                                            <h4>Deadline: Applications Closed</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/sbiz" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="/" className="my-2 applybtn">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Applications for SRHR Youth Advocates</h3>
                                            <h4>Deadline: Applications Closed</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/srhr" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="/" className="my-2 applybtn">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </header>
                </div>
            </section>
        </Layout>
    )
}

export default apply;
