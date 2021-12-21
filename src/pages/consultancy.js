import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
                        <StaticImage src="../images/agakhan.png" fluid="true" alt="Nairobits programs bottom" />
                        <StaticImage src="../images/fta.png" fluid="true" alt="Nairobits programs bottom" />
                        <StaticImage src="../images/yactp.png" fluid="true" alt="Nairobits programs bottom" />
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
                                <StaticImage src="../images/consulttop.png" fluid="true" alt="about nairobits" className="careerImg" />
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
                                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 ${conStyles.conOuter}`}>
                                    <div>
                                        <div className={`${conStyles.conHow}`}>
                                            <h3>Multidisciplinary Design</h3>
                                            <ul>
                                                <li>User Centred Research</li>
                                                <li>UI/UX Design</li>
                                                <li>Customer Experience (CX)</li>
                                                <li>Human Centred Design Processes</li>
                                                <li>Graphic Design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${conStyles.conHow}`}>
                                            <h3>Communication</h3>
                                            <ul>
                                                <li>Brand Identity Creation & Alignment</li>
                                                <li>Strategy Development & Execution</li>
                                                <li>Digital Marketing & Social Media Management</li>
                                                <li>Video production</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${conStyles.conHow}`}>
                                            <h3>Software solutions</h3>
                                            <ul>
                                                <li>Website Design & Development</li>
                                                <li>SEO Services</li>
                                                <li>Content Management Systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${conStyles.conHow}`}>
                                            <h3>Product Innovation & Testing</h3>
                                            <ul>
                                                <li>Concept Ideation & Development</li>
                                                <li>Prototyping Products</li>
                                                <li>Piloting programs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <StaticImage src="../images/supportline.svg" alt="Nairobits section seperator" />
                                </div>
                            </Row>
                        </Container>
                    </article>
                    <article className={`${conStyles.conWhy}`}>
                        <Container>
                            <Row className={`${conStyles.conWhyInn}`}>
                                <h2>Why NairoBits</h2>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <div className="">
                                        <h3>We understand Human Centred Design</h3>
                                        <p>NairoBits has a good understanding of human centred design, giving us an advantage in breaking down and designing tools for testing and adoption. Human centred design, UX Research and UI/Communication design are some of the many creative design frameworks in design thinking that enreach out output by giving it a user centre touch. Increasing ownership by users</p>
                                        <h5>ADVANTAGE:</h5>
                                        <h6>Understanding the process used, will ensure we understand the tool.</h6>
                                    </div>
                                    <figure className={`${conStyles.conImg}`}>
                                        <StaticImage src="../images/hcd.png" fluid="true" alt="NairoBits Consultancy Images" />
                                    </figure>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6}>
                                    <div className="">
                                        <h3>We understand Creative Design</h3>
                                        <p>NairoBits has a 20 year leap in design space. We practice and teach what we Know. We are always up to date with the latest market trends and ideas. We borrow and create from not just the Tech space, but greatly influenced by Pop Culture, User Centred Data and Art. Making our creative work stand out and rooted to better fit our users/clients needs.</p>
                                        <h5>ADVANTAGE:</h5>
                                        <h6>Unique creative designs and ideas.</h6>
                                    </div>
                                    <figure className={`${conStyles.conImg}`}>
                                        <StaticImage src="../images/cdesign.png" fluid="true" alt="NairoBits Consultancy Images" />
                                    </figure>
                                </Col>
                                <Col xs={12}>
                                    <div className="">
                                        <h3>We Understand Project Adoption & Implementation</h3>
                                        <p>NairoBits has implemented projects in Kenya, Uganda, Nigeria, Somaliland and Pakistan. This has given us experience in adopting project tools to better fit the needs of the local users. We work through collaboration, UX research and Market needs Analysis.</p>
                                        <h5>ADVANTAGE:</h5>
                                        <h6>Unique creative designs and ideas.</h6>
                                    </div>
                                    <figure className={`${conStyles.conImg}`}>
                                        <StaticImage src="../images/implement.png" fluid="true" alt="NairoBits Consultancy Images" />
                                    </figure>
                                </Col>
                            </Row>
                        </Container>
                    </article>
                    <article className={`${conStyles.conAss}`}>
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <h2>Recent Assignments</h2>
                                </Col>
                                <Col xs={12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div>
                                        <figure className="d-flex align-items-center p-4">
                                            <StaticImage src="../images/fairtrade.png" fluid="true" alt="NairoBits Clients logos" />
                                        </figure>
                                        <h3>PROJECT</h3>
                                        <h4>International Youth Day Advocacy Campaign</h4>
                                        <ul>
                                            <h5>TASKS</h5>
                                            <li>Communication</li>
                                            <li>Branding</li>
                                            <li>Videos</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <figure className="d-flex align-items-center p-4">
                                            <StaticImage src="../images/agakhanlogo.png" fluid="true" alt="NairoBits Clients logos" />
                                        </figure>
                                        <h3>PROJECT</h3>
                                        <h4>Schools2030 Communications Strategy & Branding Project</h4>
                                        <ul>
                                            <h5>TASKS</h5>
                                            <li>Communication</li>
                                            <li>Strategy</li>
                                            <li>Branding</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <figure className="d-flex align-items-center p-4">
                                            <StaticImage src="../images/mercycorps.png" fluid="true" alt="NairoBits Clients logos" />
                                        </figure>
                                        <h3>PROJECT</h3>
                                        <h4>Kenya Digital Payment and Online Microwork</h4>
                                        <ul>
                                            <h5>TASKS</h5>
                                            <li>Tags - Strategy</li>
                                            <li>Project Management</li>
                                            <li>Product Piloting</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </article>
                </section>
            </Layout>
        </div>
    )
}

export default consultancy;
