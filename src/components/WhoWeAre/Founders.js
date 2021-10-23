import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as foundStyles from './about.module.css';


function Founders() {
    return (
        <section className={foundStyles.founderCont}>
            <Container fluid={`md`}>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2>In their words</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Founders;
