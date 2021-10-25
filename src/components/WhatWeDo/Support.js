import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as supportStyles from './Programs.module.css';

function Support() {
    return (
        <section className={`mt-10 px-2`}>
            <Container fluid={`md`}>
                <div><img src="../imgs/supportline.svg" alt="Nairobits Support Seperator" /></div>
                <Row className="py-20">
                    <Col xs={12} className={`${supportStyles.supportHeading}`}>
                        <h2>Support</h2>
                    </Col>
                    <div className={supportStyles.supportCont}></div>
                </Row>
            </Container>
        </section>
    )
}

export default Support;
