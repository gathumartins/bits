import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function donate() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={operateStyles.donCont}>
                                <Row className="mb-10">
                                    <Col xs={12} className={operateStyles.topOpsHeading}>
                                        <h2 className="text-center">Donate</h2>
                                    </Col>
                                </Row>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-20 row justify-content-center ${operateStyles.donateOut}`}>

                                    <div className={`${operateStyles.donateInn}`}>
                                        <div className={`card ${operateStyles.donate} ${operateStyles.kingbadu}`}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className={`col-3 ${operateStyles.taxico}`}><img src="./imgs/501.png" alt="Nairobits donate" /></div>
                                                    <div className="col-8">Donate online through our U.S fiscal sponsor King Baudouin Foundation U.S (KBFUS) Website.</div>
                                                    <div className={`row ${operateStyles.icos} pt-3`}>
                                                        <img src="./imgs/kinglogo.png" alt="Nairobits donate" className={operateStyles.donatelogos} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>
                                        <div class={`card ${operateStyles.donate} ${operateStyles.paypal}`}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-8">Donate <br />via Paypal</div>
                                                    <div className={`row ${operateStyles.icos}  pt-2`}>
                                                        <img src="./imgs/paypallogo.png" alt="Nairobits paypal logo" className={operateStyles.donatelogos} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>

                                        <div className={`card ${operateStyles.donate} ${operateStyles.mpesa}`}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-8">Donate via Mpesa: <br />Paybill: 23234</div>
                                                    <div className={`row ${operateStyles.icos} pt-2`}>
                                                        <img src="./imgs/mpesa.png" alt="" className={operateStyles.donatelogos} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={operateStyles.donateInn}>
                                        <div className={`card ${operateStyles.donate} ${operateStyles.crypto}`}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-8">Donate Cryptocurrency</div>
                                                    <div className="row form mt-4">
                                                        <form action="">
                                                            <div className="input-group mb-3">
                                                                <span className={`input-group-text ${operateStyles.cryptologos}`}> <img src="./imgs/btc.svg" alt="" /></span>
                                                                <input type="text" className={`form-control ${operateStyles.inputsft}`} aria-label="" value="bc1q5srnq3kmzpnp8vvjqzhen6r3p7avzxv5yx4p3w" readonly />
                                                                <span class="input-group-text"><i className="bi bi-clipboard"></i></span>
                                                            </div>

                                                            <div className="input-group mb-3">
                                                                <span className={`input-group-text ${operateStyles.cryptologos}`}><img src="./imgs/eth.png" alt="" /></span>
                                                                <input type="text" class={`form-control ${operateStyles.inputsft}`} value="0x18526236d5a19ea1f0B453094a8Cbf9C9FA2AB86" readonly />
                                                                <span className="input-group-text"><i className="bi bi-clipboard"></i></span>
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
