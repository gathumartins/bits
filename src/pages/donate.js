import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function donate() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={operateStyles.donCont}>
                                <Row className="mb-10">
                                    <Col xs={12} className={operateStyles.topOpsHeading}>
                                        <h2 className="text-center">Donate</h2>
                                    </Col>
                                </Row>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-20 ${operateStyles.donateOut}`}>
                                    <div>
                                        <div className={operateStyles.donateInn}>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.donateInn}>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.donateInn}>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={operateStyles.donateInn}>
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

export default donate;
