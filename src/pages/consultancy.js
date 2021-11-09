import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as conStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function consultancy() {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>NairoBits-Consultancy</title>
                </Helmet>
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
                    <article className={conStyles.whatWeD}>
                        <Container>
                            <Row>
                                <Col className={`text-center ${conStyles.consHeader}`}>
                                    <h2 className="text-center">What we do</h2>
                                    <p>We work together with our clients to develop solutions and design products that fit their realities and help them prosper in the best way we know how. We use all tools in our arsenal to ensure we create shared value for both the client and their stakeholders.</p>
                                </Col>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 ${conStyles.conOuter}`}>
                                    <div><div className={`${conStyles.conHow}`}>
                                        <h3>Multidisciplinary Design</h3>
                                    </div></div>
                                    <div><div className={`${conStyles.conHow}`}>
                                        <h3>Communication</h3>
                                    </div></div>
                                    <div><div className={`${conStyles.conHow}`}>
                                        <h3>Software solutions</h3>
                                    </div></div>
                                    <div><div className={`${conStyles.conHow}`}>
                                        <h3>Product Innovation & Testing</h3>
                                    </div></div>
                                </div>
                                <div>
                                    <img src="./imgs/supportline.svg" alt="Nairobits section seperator" />
                                </div>
                            </Row>
                        </Container>
                    </article>
                </section>
            </Layout>
        </div>
    )
}

export default consultancy;
