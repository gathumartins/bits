import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as impactStyles from './Home.module.css';

function Impact() {
    return (
        <section className={`${impactStyles.impact}`}>
            <Container className={impactStyles.impactCont}>
                <Row className={`d-flex align-items-center ${impactStyles.impactContIn}`}>
                    <Col xs={12} className="text-center">
                        <h1>Our Impact</h1>
                    </Col>
                    <Col xs={12}>
                        <Row className={impactStyles.impactFig}>
                            <Col className={`${impactStyles.imFigures}`}>
                                <h3>22</h3>
                                <p>years of existence</p>
                            </Col>
                            <Col className={`${impactStyles.imFigures}`}>
                                <h3>10,000+</h3>
                                <p>youth Impacted</p>
                            </Col>
                            <Col className={`${impactStyles.imFigures}`}>
                                <h3>4</h3>
                                <p>Model Replicated in 4 African Countries</p>
                            </Col>
                            <Col className={`${impactStyles.imFigures}`}>
                                <h3>70%</h3>
                                <p>retention of employability in the technology sector</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Impact
