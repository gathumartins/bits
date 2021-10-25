import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as opsStyles from './about.module.css';

function OpsModel() {
    return (
        <section className={opsStyles.opsOuter}>
            <Container fluid={`md`}>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={2} className="my-3">
                        <div className={opsStyles.opsTitle}>
                            <h3>Explore NairoBits operations and programming</h3>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={9} lg={10}>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={3} className={`${opsStyles.opOuter} my-3`}>
                                <span className={opsStyles.iconsOp}> <b></b></span>
                                <div className="mx-auto">
                                    <h4>Our History</h4>
                                    <div className={opsStyles.underOps}></div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} className={`${opsStyles.opOuter} my-3`}>
                                <span className={opsStyles.iconsOp}><b></b></span>
                                <div className="mx-auto">
                                    <h4>Our Operating Model</h4>
                                    <div className={opsStyles.underOps}></div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} className={`${opsStyles.opOuter} my-3`}>
                                <span className={opsStyles.iconsOp}><b></b></span>
                                <div className="mx-auto">
                                    <h4>Our Team</h4>
                                    <div className={opsStyles.underOps}></div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} className={`${opsStyles.opOuter} my-3`}>
                                <span className={opsStyles.iconsOp}><b></b></span>
                                <div className="mx-auto">
                                    <h4>Our Partners</h4>
                                    <div className={opsStyles.underOps}></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default OpsModel
