import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PartnersList from './PartnersList';
import * as partnerStyles from './Home.module.css';

function Partners() {
    return (
        <section className={`${partnerStyles.partners} ${partnerStyles.partners}`}>
            <Container className={partnerStyles.partnerCont}>
                <Row className={`d-flex align-items-center`}>
                    <Col xs={12} className={`text-center ${partnerStyles.Headings}`}>
                        <h1>Partners</h1>
                    </Col>
                    <Col>
                        <PartnersList />
                        <div className="text-center">
                            <a href="/partners">VIEW MORE</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Partners;
