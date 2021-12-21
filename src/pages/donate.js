import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { MdOutlineCopyAll } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function donate() {
    return (
        <div>
            <Layout>
                <Helmet>
                    <title>NairoBits-Donate</title>
                </Helmet>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={operateStyles.donCont}>
                                <Row className="mb-10">
                                    <Col xs={12} className={operateStyles.topOpsHeading}>
                                        <h2 className="text-center">Donate</h2>
                                    </Col>
                                </Row>
                                <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 relative z-20 row justify-content-center ${operateStyles.donateOut}`}>

                                    <div className={`${operateStyles.donateInn}`}>
                                        <div className={`card ${operateStyles.donate} ${operateStyles.kingbadu}`}>
                                            <a href="https://kbfus.networkforgood.com/projects/53809-n-kbfus-funds-nairobits-trust-ke" className="card-body" target="_blank" rel="noreferrer">
                                                <div className="d-flex justify-between flex-column">
                                                    <div className="row">
                                                        <div className={`col-3 col-sm-3 col-md-3 col-lg-3 ${operateStyles.taxico}`}><StaticImage src="../images/501.png" fluid="true" alt="Nairobits donate" /></div>
                                                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">Donate online through our U.S fiscal sponsor King Baudouin Foundation U.S (KBFUS) Website.</div>
                                                    </div>
                                                    <div>
                                                        <div className={`d-flex justify-content-between ${operateStyles.icos} pt-3`}>
                                                            <StaticImage src="../images/kinglogo.png" alt="Nairobits donate" className={`${operateStyles.donatelogos}`} />
                                                            <div className={operateStyles.playIcon}>
                                                                <div className={operateStyles.playIconInn}>
                                                                    <div className={operateStyles.playTri}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>
                                        <div className={`card ${operateStyles.donate} ${operateStyles.paypal}`}>
                                            <a href="https://www.paypal.com/donate/?business=info%40nairobits.com" className="card-body" target="_blank" rel="noreferrer">
                                                <div className="d-flex justify-between flex-column">
                                                    <div>Donate <br />via Paypal</div>
                                                    <div>
                                                        <div className={`d-flex justify-content-between ${operateStyles.icos}  pt-2`}>
                                                            <StaticImage src="../images/paypallogo.png" alt="Nairobits paypal logo" className={`${operateStyles.donatelogos}`} />
                                                            <div className={operateStyles.playIcon}>
                                                                <div className={operateStyles.playIconInn}>
                                                                    <div className={operateStyles.playTri}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>

                                        <div className={`card ${operateStyles.donate} ${operateStyles.mpesa}`}>
                                            <div className="card-body">
                                                <div className="d-flex justify-between flex-column">
                                                    <div>Donate via Mpesa: <br />Paybill: 512894</div>
                                                    <div className={`row ${operateStyles.icos} pt-2`}>
                                                        <StaticImage src="../images/mpesa.png" alt="" className={operateStyles.donatelogos} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>
                                        <div className={`card ${operateStyles.donate} ${operateStyles.crypto}`}>
                                            <div className="card-body">
                                                <div className="d-flex justify-between flex-column">
                                                    <div>Donate Cryptocurrency</div>
                                                    <div className="row form mt-4">
                                                        <form action="">
                                                            <div className="input-group mb-3">
                                                                <span className={`input-group-text ${operateStyles.cryptologos}`}> <StaticImage src="../images/btc.svg" alt="" /></span>
                                                                <input type="text" className={`form-control ${operateStyles.inputsft}`} aria-label="" value="bc1q5srnq3kmzpnp8vvjqzhen6r3p7avzxv5yx4p3w" readOnly />
                                                                <span className="input-group-text"><MdOutlineCopyAll /></span>
                                                            </div>

                                                            <div className="input-group mb-3">
                                                                <span className={`input-group-text ${operateStyles.cryptologos}`}><StaticImage src="../images/eth.png" alt="" /></span>
                                                                <input type="text" className={`form-control ${operateStyles.inputsft}`} value="0x18526236d5a19ea1f0B453094a8Cbf9C9FA2AB86" readOnly />
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
                        </header>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default donate;
