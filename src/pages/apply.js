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
                                            <h3>Application for Customer Experience Trainer</h3>
                                            <h4>Deadline: 24<sup>TH</sup> AUGUST 2022</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="https://drive.google.com/file/d/1CbRFumDVgXrOrWoiWaq20j-P4JkilXKR/view" className="progmore" target="_blank" rel="noreferrer">Read more about the Vacancy</a>
                                            <br />
                                            <a href="https://drive.google.com/file/d/1CbRFumDVgXrOrWoiWaq20j-P4JkilXKR/view" className="my-2 applybtn" target="_blank" rel="noreferrer">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for the S-Bize Program</h3>
                                            <h4>Deadline: 5<sup>TH</sup> SEPTEMBER 2022</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/sbiz" className="progmore">Read more about program</a>
                                            <br />

                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd1XPDCaH1qUoWLpBnXsSH5jYWrFCUvG62n1DEbSwIhQ03HhA/viewform" className="my-2 applybtn disabled" target="_blank" rel="noreferrer">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for NairoBits Volunteer Opportunities</h3>
                                            <h4>Deadline: Open</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/volunteer" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="https://nairobitshelp.zendesk.com/hc/en-us/requests/new?ticket_form_id=6817351621777" className="my-2 applybtn disabled" target="_blank" rel="noreferrer">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for Advanced Multimedia Program</h3>
                                            <h4>Deadline: Applications Closed</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/amp" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="https://applyamp.nairobits.com" className="my-2 applybtn disabled" target="_blank" rel="noreferrer">Apply</a>
                                        </div>
                                    </div>
                                    <div className={`d-flex ${proStyles.applyOut}`}>
                                        <div className={`w-14 ${proStyles.headingIcons}`}></div>
                                        <div className={`flex-grow ${proStyles.applyInn}`}>
                                            <h3>Application for the Digital Literacy Program</h3>
                                            <h4>Deadline: 26<sup>TH</sup> AUGUST 2022</h4>
                                            <div className={proStyles.dateUnder}></div>
                                            <a href="/programs/dlp" className="progmore">Read more about program</a>
                                            <br />
                                            <a href="https://applydlp.nairobits.com" className="my-2 applybtn" target="_blank" rel="noreferrer">Apply</a>
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
                                            <a href="/" className="my-2 applybtn disabled">Apply</a> 
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
