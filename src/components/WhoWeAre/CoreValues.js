import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import { Container, Row, Col } from 'react-bootstrap';
import * as coreStyles from './about.module.css';

function CoreValues() {
    return (
        <section className={coreStyles.coreOuter}>
            <Container fluid={`md`}>
                <Row>
                    <Col xs={12} className={`text-center ${coreStyles.coreHeading}`}>
                        <h1>Our core values</h1>
                    </Col>
                    <Col xs={12} className="my-4">
                        <StaticImage src="../../images/corevalues.svg" fluid="true" alt="NairoBits core values" />
                    </Col>
                    <Col xs={12}>
                        <Row className="mb-10">
                            <Col xs={12} sm={6} md={3} className="my-3">
                                <div className={coreStyles.coreValue}>
                                    <h5>Benevolent (kind and helpful)</h5>
                                    <p>We place emphasis and great concern for others' welfare (i.e. helpful, forgiving. responsible, loyal, true friendship, mature love) to promote cooperative and supportive social relations.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} className="my-3">
                                <div className={coreStyles.coreValue}>
                                    <h5>Intergrity</h5>
                                    <p>We are honest, impartial and trustworthy at all times with our colleagues, students and all stakeholders, delivering services fairly and objectively free of discrimination or preferential treatment.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} className="my-3">
                                <div className={coreStyles.coreValue}>
                                    <h5>Transformative</h5>
                                    <p>We commit to undertaking an overarching cultural and purpose-led transformation within and without NairoBits.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} className="my-3">
                                <div className={coreStyles.coreValue}>
                                    <h5>Solidarity with communities & Accountability to society</h5>
                                    <p>We strive to willingly give ourselves for the good of our community, especially the disadvantaged youth. We recognize that we are true representatives and guardians of the youth and others from disadvantaged and informal settlements in our society.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CoreValues
