import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from '../components/WhoWeAre/about.module.css';


function alumni() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-Alumni</title>
            </Helmet>
            <header className={`${histStyles.historyBanOut} commonbgOuter`}>
                <div className="commonSmallBg">
                    <Container fluid={`md`} className={`commonHeader conContSpe`}>
                        <Row>
                            <Col xs={12}>
                                <h2>Our Alumni</h2>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <p>We are proud of our work most when we see our students graduate and get jobs that change their lives and their communities positively. Such success stories are the testament of our intentions whenever we work so passionately to impart tech skills in each young person that walks through our doors. Whether as short as the 1 Week training or as long as a full year in the Innovation and Technology program, we strive to ensure that NairoBits leaves an indelible mark in the lives of these young people.</p>
                                <p>We consider our alumni as our partners and as a rich resource for the success of our programming. Time and time again, we have hired from our alumni pool, had alumni encourage students as guest speakers and even worked with alumni to sponsor trainees throughout the course.</p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} className={`bannerImage`}>
                                <StaticImage src="../images/alumni.png" fluid="true" alt="nairobits careers" className="careerImg" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <section>
                <Container className={`py-14 ${histStyles.alumniMid}`}>
                    <h3>We invite our alumni to:</h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${histStyles.alumniMidInn}`}>
                        <div className={histStyles.alumni}>
                            <div className={histStyles.alumniITop}></div>
                            <h5>Mentor/ Volunteer as a guest trainer</h5>
                            <div className={histStyles.bottomLine}></div>
                        </div>
                        <div className={histStyles.alumni}>
                            <div className={histStyles.alumniITop}></div>
                            <h5>Hire an Intern</h5>
                            <div className={histStyles.bottomLine}></div>
                        </div>
                        <div className={histStyles.alumni}>
                            <div className={histStyles.alumniITop}></div>
                            <h5>Donate/ Sponsor a current learner</h5>
                            <div className={histStyles.bottomLine}></div>
                        </div>
                        <div className={histStyles.alumni}>
                            <div className={histStyles.alumniITop}></div>
                            <h5>Co-bid for consulting assignments with us</h5>
                            <div className={histStyles.bottomLine}></div>
                        </div>
                    </div>
                </Container>
            </section>
            <article className={`py-10 ${histStyles.studentBtm}`}>
                <Container fluid={`md`}>
                    <section className="studentBtmInn">
                        <Row>
                            <Col className="md:mb-5" xs={12} sm={12} md={6}>
                                <h4>Write your own alumni story.</h4>
                                <p>It does not matter the decade or year that you trod our classrooms, if you are our alumni, we’d like to hear from you and partner with you. Please fill the form below and we will be in touch:</p>
                            </Col>
                            <Col className="md:mb-5 d-flex align-items-center text-center" xs={12} sm={12} md={6}>
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

