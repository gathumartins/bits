import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function operatingmodel() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`}>
                                <Row className="mb-16">
                                    <Col xs={12} className={operateStyles.topOpsHeading}>
                                        <h2 className="text-center">Our operating model</h2>
                                    </Col>
                                </Row>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ${operateStyles.opsCont}`}>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Strategic Approach</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Technology Use</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Positive Youth Development</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Partnership Approach</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Pedagogical Framework</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>INFOGRAPHIC</h3>
                                        <h4>05-20-2021</h4>
                                        <div className={operateStyles.opsContInn}>
                                            <div className={operateStyles.opsContInnBtm}>
                                                <h1>Sustainability Approach</h1>
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

export default operatingmodel;
