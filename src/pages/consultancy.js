import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as conStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function consultancy() {
    return (
        <div>
            <Layout>
                <section className={conStyles.conTop}>
                    <div className="grid grid-cols-3">
                        <img src="./imgs/agakhan.png" fluid="true" alt="Nairobits programs bottom" />
                        <img src="./imgs/fta.png" fluid="true" alt="Nairobits programs bottom" />
                        <img src="./imgs/yactp.png" fluid="true" alt="Nairobits programs bottom" />
                    </div>
                    <div className="consultancyStripe"></div>
                </section>
                <section>
                    <Container fluid={`md`} className={`${conStyles.conCont} commonHeader`}>
                        <Row>
                            <Col xs={12}>
                                <h2 className="text-center">Consultancy Services</h2>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <p>NairoBits Trust is a multi-disciplinary design firm with extensive experience in youth and technology programming. The organization prepares young people from low income areas for high-impact careers in the tech space through digital skills training and professional integration with the labor market. Over the course of our work in Nairobi’s impoverished communities for over 20 years now, we have directly trained over 10,000 youth and we continue to make tech accessible as a life changing and solution building tool for vulnerable youth. </p>
                                <p>ONairoBits also spots a social enterprise model that enables us to create and build with gurus in our community. We actively use our 20 Year experience in the ICT creative sector to deliver consultancy assignments across several domains of expertise.</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className={`bannerImage`}>
                                <img src="./imgs/consulttop.png" fluid="true" alt="about nairobits" className="careerImg" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    )
}

export default consultancy;
