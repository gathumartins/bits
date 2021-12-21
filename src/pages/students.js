import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from '../components/WhoWeAre/about.module.css';


function students() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-Students</title>
            </Helmet>
            <header className={`${histStyles.historyBanOut} commonbgOuter`}>
                <div className="commonSmallBg">
                    <Container fluid={`md`} className={`commonHeader conContSpe`}>
                        <Row>
                            <Col xs={12}>
                                <h2>Our Students</h2>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <p>NairoBits is a place to learn, open your mind, grow, try new things, innovate and build. We encourage students to experiment and put their curiosity to the test to ensure that they have the best learning experience. We consider our students as the top resource in the learning environment - their lives fuel inspiration for classes throughout the courses. In fact, we encourage each student to use their unique realities as challenges for solution-building. </p>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className={`bannerImage`}>
                                <img src="./imgs/students.png" fluid="true" alt="nairobits careers" className="careerImg" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <section className="grid grid-cols-3">
                <figure>
                    <img src="./imgs/studentsone.png" alt="Nairobits students in class" />
                </figure>
                <figure>
                    <img src="./imgs/studentstwo.png" alt="Nairobits students in class" />
                </figure>
                <figure>
                    <img src="./imgs/studentsthree.png" alt="Nairobits students in class" />
                </figure>
            </section>
            <article className={`py-10 ${histStyles.studentBtm}`}>
                <Container fluid={`md`}>
                    <section className="studentBtmInn">
                        <Row>
                            <Col className="md:mb-5" xs={12} sm={12} md={6}>
                                <h4>Make a suggestion to improve your student life</h4>
                                <p>We are providing this space for our current students to make direct suggestions to our management and board on suggestions they may have to better the learning experience @ NairoBits.</p>
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

export default students;

