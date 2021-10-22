import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as partnerStyles from './Home.module.css';

function News() {
    return (
        <section className={`${partnerStyles.news}`}>
            <Container className={partnerStyles.partnerCont}>
                <Row className={`d-flex align-items-center`}>
                    <Col xs={12} className={`text-center ${partnerStyles.Headings}`}>
                        <h1>Bits news</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    )
}

export default News;
