import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../../components/WhatWeDo/Programs.module.css';
import Layout from '../../components/Layout';
import Support from '../../components/WhatWeDo/Support';

function yact() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12} sm={12} md={7}>
                                        <h2>Youth In ActionY-Act</h2>
                                        <p>Empowering youth to gain skills, voice, and participate in youth-identified policy priorities in Kenya regarding sexual and reproductive health and rights</p>
                                    </Col>
                                    <Col xs={12} sm={12} md={5} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/K-YCjg9BNto"></iframe>
                                        </figure>
                                    </Col>
                                </Row>
                            </Container>
                        </header>
                    </div>
                </section>
                <section>
                    <Container fluid={`md`} className="programBCont relative">
                        <Row className={`${proStyles.programContInn}`}>
                            <Col xs={12} sm={12} md={7}>
                                <div className="d-flex align-items-strecth">
                                    <div className="d-flex align-items-strecth">
                                        <div className="programleftStripe mr-5">
                                            <div className="stripeTop"></div>
                                            <div className="programStripe"></div>
                                        </div>
                                    </div>
                                    <div className="programsWWWCont">

                                        <div className="programsWWW">
                                            <h3>Why</h3>
                                            <p>Young people under the age of 35 make up 70% of the Kenyan population, yet often face huge barriers to engaging with decision-makers and making the changes they seek, especially in the areas of gender equality and SRHR. Since 2017, the Y-ACT movement has grown to become one of the most influential movements of youth in the region. </p>
                                            <p>Y-ACT provides tailored training, mentorship, coaching and coalition-building support to youth advocates and youth organizations in Africa. The Youth Advocacy project works with youth across Kenya to overcome and remove these barriers in order to take advantage of the huge opportunities that currently exist for youth to shift Kenya’s political landscape.</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>How</h3>
                                            <p>Amref Health Africa and the Advocacy Accelerator are implementing the Youth Advocacy Project, an initiative working with youth, partners and communities to strengthen the voice, skills, and participation of youth across Kenya to advocate for youth-identified policy and resource priorities in the areas of gender equality and sexual and reproductive health and rights (SRHR).</p>
                                        </div>
                                        <div className="programsWWW">
                                            <h3>The project aims to;</h3>
                                            <ul>
                                                <li>Establish and strengthen a platform for youth-led advocacy networks and organizations across Kenya to pursue a common set of youth-identified policy priorities addressing gender equality and SRHR.</li>
                                                <li>Strengthen the capacity of a targeted number of youth-led advocacy organizations in four counties in Kenya in advocacy, advocacy communications, and campaigning on their priority advocacy topics in the areas of gender equality and SRHR. </li>
                                                <li>Support a strategic effort by youth to increase their representation on committees and other bodies in their counties and at the national level to increasingly inform government priorities and practices.</li>
                                                <li>Disseminate the tools and resources designed through this project to advocates across Africa and offer training,resources, and technical assistance to select organizations in East Africa.</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} className={`${proStyles.sideBar} mt-10 py-20 px-4 md:px-2`}>
                                <h4>Program partners</h4>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 programsPartners">
                                    <li className="d-flex align-items-center"><StaticImage src="../../images/yact.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                    <li className="d-flex align-items-center"><StaticImage src="../../images/amref.png" alt="NairBits Advanced Multimedia program Edukans" /></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="clear"></div>
                <Support></Support>
            </Layout>
        </div>
    )
}

export default yact;
