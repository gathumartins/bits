import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineCopyAll } from 'react-icons/md';
import Layout from '../components/Layout';
import * as compStyles from '../components/Minor.module.css';

function campaign() {
    return (
        <Layout>
            <header className={compStyles.headerTop}>

            </header>
            <section className={compStyles.compContTop}>
                <Container fluid={`md`}>
                    <Row className={compStyles.compContTopInn}>
                        <Col xs={12}>
                            <Row className="">
                                <Col xs={12} sm={12} md={7} lg={7}>
                                    <h2>The Challenge</h2>
                                    <p>The digital economy is skills-oriented and provides opportunities for all regardless of educational or social background. Given opportunity, anyone who can demonstrate a mastery of skills in the tech world can secure a safe pipeline of work into the future. Unfortunately, youth from low income backgrounds lack the ability to make gainful use of tech opportunities because they lack access to training.</p>
                                    <p> For many of these young people, higher education in technology is a pipe-dream due to poverty, low education outcomes at secondary school and the unending web of their socio-economic challenges. They are therefore unable to gain entry to the ICT sector which perpetuates youth unemployment among them risking their exposure to crime, prostitution, drug abuse and other social evils as means to make a living.</p>
                                </Col>
                                <Col xs={12} sm={12} md={5} lg={5} className={compStyles.compContVid}>
                                    <h2>Our Solution</h2>
                                    <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                        <iframe title="Nairobits Home page video" src="https://www.youtube.com/embed/BAmX1Mi93No"></iframe>
                                    </figure>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row className="">
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <h2>Impact</h2>
                                    <p>The goal of this fundraiser is to support 1,000 underserved Kenyan youth to acquire digital skills as an avenue for employment in 2022. Each young person supported will gain access to 12 weeks of Digital Literacy where they will learn Computing Fundamentals, Digital Marketing, Online Work and Acumen for leadership and good decision making. </p>
                                    <p>The outcomes of this program place these young people at a pedestal to gain entry level jobs. More importantly, the program unlocks their inner curiosity about pursuing technology as a career course. Alumni of this program have in the past specialized at our advanced programs and gone to work with big brands such as Microsoft, ABSA, Bank of Kigali and much more.</p>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="text-center">
                                    <StaticImage src="../images/impactcamp.svg" alt="NairoBits Camapign robot"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={compStyles.compMid}>
                <Container fluid={`md`}>
                    <Row>
                        <StaticImage src="../images/giving.png" className="object-cover" alt="thanksgiving" />
                        <Col xs={12}>
                            <p>This season of gratitude and thanksgiving, join us in making an impact in the lives of the young people we serve so passionately. Join the #GivingTuesday movement and unleash your power to transform our communities. A donation of 50USD offers a scholarship to each student for a 12 week course.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container fluid={`md`} className={`${compStyles.donCont} ${compStyles.donContComp}`}>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <h1>Donate today through any of our donation platforms:</h1>
                        </Col>
                    </Row>
                    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 relative z-20 row justify-content-center ${compStyles.donateOut}`}>

                        <div className={`${compStyles.donateInn}`}>
                            <div className={`card ${compStyles.donate} ${compStyles.kingbadu}`}>
                                <a href="https://kbfus.networkforgood.com/projects/53809-n-kbfus-funds-nairobits-trust-ke" className="card-body" target="_blank" rel="noreferrer">
                                    <div className="d-flex justify-between flex-column">
                                        <div className="row">
                                            <div className={`col-3 col-sm-3 col-md-3 col-lg-3 ${compStyles.taxico}`}><StaticImage src="../images/501.png" fluid="true" alt="Nairobits donate" /></div>
                                            <div className="col-9 col-sm-9 col-md-9 col-lg-9">Donate online through our U.S fiscal sponsor King Baudouin Foundation U.S (KBFUS) Website.</div>
                                        </div>
                                        <div>
                                            <div className={`d-flex justify-content-between ${compStyles.icos} pt-3`}>
                                                <StaticImage src="../images/kinglogo.png" alt="Nairobits donate" className={`${compStyles.donatelogos}`} />
                                                <div className={compStyles.playIcon}>
                                                    <div className={compStyles.playIconInn}>
                                                        <div className={compStyles.playTri}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={compStyles.donateInn}>
                            <div className={`card ${compStyles.donate} ${compStyles.paypal}`}>
                                <a href="https://www.paypal.com/donate/?business=info%40nairobits.com" className="card-body" target="_blank" rel="noreferrer">
                                    <div className="d-flex justify-between flex-column">
                                        <div>Donate <br />via Paypal</div>
                                        <div>
                                            <div className={`d-flex justify-content-between ${compStyles.icos}  pt-2`}>
                                                <StaticImage src="../images/paypallogo.png" alt="Nairobits paypal logo" className={`${compStyles.donatelogos}`} />
                                                <div className={compStyles.playIcon}>
                                                    <div className={compStyles.playIconInn}>
                                                        <div className={compStyles.playTri}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={compStyles.donateInn}>

                            <div className={`card ${compStyles.donate} ${compStyles.mpesa}`}>
                                <div className="card-body">
                                    <div className="d-flex justify-between flex-column">
                                        <div>Donate via Mpesa: <br />Paybill: 512894</div>
                                        <div className={`row ${compStyles.icos} pt-2`}>
                                            <StaticImage src="../images/mpesa.png" alt="" className={compStyles.donatelogos} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={compStyles.donateInn}>
                            <div className={`card ${compStyles.donate} ${compStyles.crypto}`}>
                                <div className="card-body">
                                    <div className="d-flex justify-between flex-column">
                                        <div>Donate Cryptocurrency</div>
                                        <div className="row form mt-4">
                                            <form action="">
                                                <div className="input-group mb-3">
                                                    <span className={`input-group-text ${compStyles.cryptologos}`}> <StaticImage src="../images/btc.svg" alt="" /></span>
                                                    <input type="text" className={`form-control ${compStyles.inputsft}`} aria-label="" value="bc1q5srnq3kmzpnp8vvjqzhen6r3p7avzxv5yx4p3w" readOnly />
                                                    <span className="input-group-text"><MdOutlineCopyAll /></span>
                                                </div>

                                                <div className="input-group mb-3">
                                                    <span className={`input-group-text ${compStyles.cryptologos}`}><StaticImage src="../images/eth.png" alt="" /></span>
                                                    <input type="text" className={`form-control ${compStyles.inputsft}`} value="0x18526236d5a19ea1f0B453094a8Cbf9C9FA2AB86" readOnly />
                                                    <span className="input-group-text"><MdOutlineCopyAll /></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </Layout>
    )
}

export default campaign;
