import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function resources() {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>NairoBits-Resources</title>
                </Helmet>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`}>
                                <Row className="mb-10">
                                    <Col xs={12} className={operateStyles.topOpsHeading}>
                                        <h2 className="text-center">Resources</h2>
                                        <h5 className="text-center">Organizational Direction</h5>
                                    </Col>
                                </Row>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${operateStyles.resCont}`}>
                                    <a href="https://drive.google.com/file/d/126F6tDc5MW1FKcXvG9Ly-fg21XvEryvk/view" target="_blank" rel="noreferrer" download>
                                        <div>
                                            <div className={operateStyles.resContInn}>
                                                <StaticImage src="../images/impact2021.jpeg" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>Impact Report 2021</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://drive.google.com/file/d/1tqCjxNKHFCOohMYBP_0J4noSji07f5Dd/view" target="_blank" rel="noreferrer" download>
                                        <div>
                                            <div className={operateStyles.resContInn}>
                                                <StaticImage src="../images/sp.png" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>Strategic Plan</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://drive.google.com/file/d/1pKV48kYJ0avZHsHSiTb22C9Mpic2ERj8/view" target="_blank" rel="noreferrer" download>
                                        <div>
                                            <div className={operateStyles.resContInn}>
                                                <StaticImage src="../images/profile.png" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>NairoBits Profile</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <a href="https://drive.google.com/file/d/1c3R12FeDBvyOiBk4EkTYhVqO7fPDi8go/view?usp=sharing" target="_blank" rel="noreferrer" download>
                                                <StaticImage src="../images/impact2020.png" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>Impact Report 2020</h1>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1OHAZi0hStQ_0GjUBERg13PHq_QPxns1S/view" target="_blank" rel="noreferrer" download>
                                            <div className={operateStyles.resContInn}>
                                                <StaticImage src="../images/review2020.png" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>2020 Year in Review</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/14fZ3-RHL7z0iD9hYfpsWyka8jmiFSgad/view" target="_blank" rel="noreferrer" download>
                                            <div className={operateStyles.resContInn}>
                                                <StaticImage src="../images/impact2019.png" fluid="true" alt="" />
                                                <div className={operateStyles.resContInnBtm}>
                                                    <h1>Impact Report 2019</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Container>
                        </header>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default resources;
