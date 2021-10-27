import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from '../components/WhoWeAre/about.module.css';


function alumni() {
    return (
        <Layout>
            <header className={`${histStyles.historyBanOut} commonbgOuter`}>
                <div className="commonSmallBg">
                    <Container fluid={`md`} className={`commonHeader conContSpe`}>
                        <Row>
                            <Col xs={12}>
                                <h2>Our Alumni</h2>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <p>We are proud of our work most when we see our students graduate and get jobs that change their lives and their communities positively. Such success stories are the testament of our intentions whenever we work so passionately to impart tech skills in each young person that walks through our doors. Whether as short as the 1 Week training or as long as a full year in the Innovation and Technology program, we strive to ensure that NairoBits leaves an indelible mark in the lives of these young people.</p>
                                <p>We consider our alumni as our partners and as a rich resource for the success of our programming. Time and time again, we have hired from our alumni pool, had alumni encourage students as guest speakers and even worked with alumni to sponsor trainees throughout the course.</p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className={`bannerImage`}>
                                <img src="./imgs/alumni.png" fluid="true" alt="nairobits careers" className="careerImg" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <section>
                <Container className={`py-14 ${histStyles.alumniMid}`}>
                    <h3>We invite our alumni to:</h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${histStyles.alumniMidInn}`}>
                        <div className="alumni"></div>
                        <div className="alumni"></div>
                        <div className="alumni"></div>
                        <div className="alumni"></div>
                    </div>
                </Container>
            </section>
            <article className={`py-10 ${histStyles.studentBtm}`}>
                <Container fluid={`md`}>
                    <section className="studentBtmInn">
                        <Row>
                            <Col className="mb-5">
                                <h4>Write your own alumni story.</h4>
                                <p>It does not matter the decade or year that you trod our classrooms, if you are our alumni, we’d like to hear from you and partner with you. Please fill the form below and we will be in touch:</p>
                            </Col>
                            <Col className="mb-5 d-flex align-items-center text-center">
                                <div className="applybtnS">Submit Interest</div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </article>
        </Layout>
    )
}

export default alumni;

