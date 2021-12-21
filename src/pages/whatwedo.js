import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../components/WhatWeDo/Programs.module.css';
import Layout from '../components/Layout';

function programs() {
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-WhatWeDo</title>
            </Helmet>
            <section className="commonbgOuter">
                <div className="commonMidBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={proStyles.proTop}>
                            <Row>
                                <Col xs={12} sm={12} md={6}>
                                    <h2>Programs</h2>
                                    <p>NairoBits is governed by a Board of Trustees mandated to with ensuring the organization’s strategic guidance and operational goodwill for all the difference we want to make in the world</p>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <figure className="topsvg">
                                        <StaticImage src="../images/topsvg.svg" fluid="true" className="w-2/3 object-contain" alt="Nairobits programs top svg" />
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </header>
                    <article className="mt-20">
                        <section className={proStyles.proConts}>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNums}`}>01</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Innovation & Technology</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>Increasing job job readiness and pathways for employment in the ICT space for young people through technical guidance, prudent training methodologies and continuous mentorship, students increase</p>
                                            </div>
                                        </Col>
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <Link to="/programs/dlp">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Digital Literacy Program</h5>
                                                        <p>A 12-week course for novice youth</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/dlp.png" fluid="true" alt="NairoBits Digital Literacy Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/amp">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Advanced Multimedia Program</h5>
                                                        <p>A 9 month apprenticeship diploma specialization in design or coding</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/amp.png" fluid="true" alt="NairoBits Advanced Multimedia Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/vit">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Video Impact Training</h5>
                                                        <p>1 Week training that produces mobile storytellers</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/vit.png" fluid="true" alt="NairoBits Video impact training Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/coreacumen">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Core Acumen</h5>
                                                        <p>Complimentary programs that promote responsible living</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/coreacumen.png" fluid="true" alt="NairoBits Core Acumen Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/labourmarket">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Labour Market Integration</h5>
                                                        <p>Facilitating entry to the labour market through volunteerships, internships and corporate learning programs</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/lmi.png" fluid="true" alt="NairoBits labour market integration Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNumsTwo}`}>02</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Acumen Programs</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>Programs that seek to deal with the realities that our youth live in and awakening youth to those realities</p>
                                            </div>
                                        </Col>
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <Link to="/programs/enterprenuership">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Entrepreneurship & Business Coaching</h5>
                                                        <p>Preparing entrepreneurially gifted students for careers in business</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/coaching.png" fluid="true" alt="NairoBits enterprenuership and coaching Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/rhrn">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Right Here Right Now 2</h5>
                                                        <p>A 5 year consortium for the nationwide SRHR change</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/rhrn2.png" fluid="true" alt="NairoBits right here right now two Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/yact">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>Youth in Action</h5>
                                                        <p>Empowering youth to gain skills, voice, and participate in youth-identified policy priorities in Kenya regarding sexual and reproductive health and rights</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/youthinaction.png" fluid="true" alt="NairoBits youth in action Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                            <div>
                                <Container fluid={`md`}>
                                    <Row>
                                        <Col xs={12} className={proStyles.proContOut}>
                                            <div className={`mt-0 ${proStyles.proNumsThree}`}>03</div>
                                            <div className={proStyles.proHead}>
                                                <h3>Global Technical & Cultural Exchange Programs</h3>
                                                <div className={proStyles.spacer}></div>
                                                <p>In creating world-wide opportunities, we partner with international institutions for knowledge sharing and increasing the opportunity base for collaboration and cultural exchange.</p>
                                            </div>
                                        </Col>
                                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 align-items-strecth ${proStyles.progs}`}>
                                            <div>
                                                <Link to="/programs/wearebits">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>#WeAreBits</h5>
                                                        <p>Preparing entrepreneurially gifted students for careers in business</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/wearebits.png" fluid="true" alt="NairoBits #wearebits Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/programs/sbiz">
                                                    <div className={`${proStyles.progsTop} h-full`}>
                                                        <h5>S-Bize</h5>
                                                        <p>A 5 year consortium for the nationwide SRHR change</p>
                                                    </div>
                                                    <div className={proStyles.progsBtm}>
                                                        <StaticImage src="../images/sbize.png" fluid="true" alt="NairoBits s-bize Program" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </div>
                        </section>
                        <section className={`${proStyles.proBtm} grid grid-cols-3`}>
                            <StaticImage src="../images/probtmone.png" fluid="true" alt="Nairobits programs bottom" />
                            <StaticImage src="../images/probtmtwo.png" fluid="true" alt="Nairobits programs bottom" />
                            <StaticImage src="../images/probtmthree.png" fluid="true" alt="Nairobits programs bottom" />
                        </section>
                    </article>
                </div>
            </section>
        </Layout>
    )
}

export default programs;
