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
                        <ul className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 my-20 ${partnerStyles.partnerLogo}`}>
                            <li className="text-center"><img src="./imgs/googlelogo.png" alt="google logo" fluid="true" /></li>
                            <li className="text-center"><img src="./imgs/uniceflogo.png" alt="unicef logo" fluid="true" /></li>
                            <li className="text-center"><img src="./imgs/amreflogo.png" alt="amref logo" fluid="true" /></li>
                            <li className="text-center"><img src="./imgs/rutgerslogo.png" alt="rutgers logo" fluid="true" /></li>
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
