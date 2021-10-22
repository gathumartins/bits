import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import * as whoStyles from './about.module.css';

function WhoWeAre() {
    return (
        <Layout>
            <header className={`${whoStyles.topPage} d-flex align-items-center min-h-screen py-20`}>
                <Container fluid={`md`} className={whoStyles.banInn}>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <h2>About Us</h2>
                            <p>NairoBits Trust is a Kenyan non-profit that leverages ICT to empower disadvantaged youth from the informal settlements of Nairobi. We offer alternative higher education programs that unlock careers in tech through digital skills training and professional integration with the labor market.</p>
                            <p>Our programming is based on a two pronged strategic approach i.e. Enhancing the capacity of underserved youth to increase their readiness for them to make gainful advantage of the digital age and; Promoting the creation of opportunities and utilization of available ones in the ICT sub-sector. </p>
                            <p>These strategic approaches are the backbone of our programs ranging across technical skills on digital literacy, acumen building and creating wholesome subsector change through advocacy on the digital divide across marginalized groups.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} className={`py-20 ${whoStyles.banRightOut}`}>
                            <div className={`${whoStyles.banRight} z-50`}></div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className={whoStyles.misvis}>
                <Container fluid={`md flex-grow`}>
                    <div className={`relative`}>
                        <Row className={``}>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className={`py-2`}>
                                <div className={`${whoStyles.misvisInn} ${whoStyles.misvisL}`}></div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className={`py-2`}>
                                <div className={`${whoStyles.misvisInn} ${whoStyles.misvisR}`}></div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default WhoWeAre;
