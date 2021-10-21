import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as partnerStyles from './Home.module.css';

function Partners() {
    return (
        <section className={`${partnerStyles.partners}`}>
            <Container className={partnerStyles.partnerCont}>
                <Row className={`d-flex align-items-center ${partnerStyles.partnerContIn}`}>
                    <Col xs={12} className={`text-center ${partnerStyles.Headings}`}>
                        <h1>Partners</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Partners;
