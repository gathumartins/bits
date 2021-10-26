import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function resources() {
    return (
        <div>
            <Layout>
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
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <div className={operateStyles.resContInnBtm}>
                                                <h1>Strategic Plan</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <div className={operateStyles.resContInnBtm}>
                                                <h1>NairoBits Profile</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <div className={operateStyles.resContInnBtm}>
                                                <h1>Impact Report 2020</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <div className={operateStyles.resContInnBtm}>
                                                <h1>2020 Year in Review</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.resContInn}>
                                            <div className={operateStyles.resContInnBtm}>
                                                <h1>Impact Report 2019</h1>
                                            </div>
                                        </div>
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
