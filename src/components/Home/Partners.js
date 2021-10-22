import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as partnerStyles from './Home.module.css';

function Partners() {
    return (
        <section className={`${partnerStyles.partners}`}>
            <Container className={partnerStyles.partnerCont}>
                <Row className={`d-flex align-items-center`}>
                    <Col xs={12} className={`text-center ${partnerStyles.Headings}`}>
                        <h1>Partners</h1>
                    </Col>
                    <Col>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-20">
                            <li className="text-center">1</li>
                            <li className="text-center">2</li>
                            <li className="text-center">3</li>
                            <li className="text-center">4</li>
                        </ul>
                        <div className="text-center">
                            <a href="/">VIEW MORE</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Partners;
